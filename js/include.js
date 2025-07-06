function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(el => {
    const file = el.getAttribute('data-include');

    fetch(file)
      .then(res => res.text())
      .then(html => {
        const template = document.createElement('template');
        template.innerHTML = html.trim();

        // اضافه کردن فقط تگ‌های غیر CSS/JS
        const tempChildren = template.content.cloneNode(true);
        const nonAssets = [...tempChildren.childNodes].filter(node => {
          return !(node.tagName === 'SCRIPT' || node.tagName === 'LINK');
        });
        el.replaceChildren(...nonAssets);

        // اضافه‌کردن <link> به head
        template.content.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          const href = link.getAttribute('href');
          if (!document.querySelector(`link[href="${href}"]`)) {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = href;
            document.head.appendChild(newLink);
          }
        });

        // اضافه‌کردن <script> به body
        template.content.querySelectorAll('script').forEach(script => {
          const src = script.getAttribute('src');
          const newScript = document.createElement('script');

          if (src) {
            if (!document.querySelector(`script[src="${src}"]`)) {
              newScript.src = src;
              newScript.defer = true;
              document.body.appendChild(newScript);
            }
          } else {
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
          }
        });
      })
      .catch(err => {
        el.innerHTML = `<p style="color:red;">مشکل در بارگذاری ${file}</p>`;
        console.error(err);
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
