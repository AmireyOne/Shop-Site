// درگ کردن موس در کتگوری ها

const slider = document.querySelector('.main-categoryes');
const btnLeft = document.querySelector('.scroll-left');
const btnRight = document.querySelector('.scroll-right');

let isDown = false;
let startX;
let scrollLeft;

// Drag to scroll
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // سرعت حرکت
  slider.scrollLeft = scrollLeft - walk;
});



// شبیه ساز دیتابیس کتگوری ها

const main_category = [
  { id: 1, name: 'غذا های منجمد', count: '+125 محصول', img: './img/main-categories/feature-img10.png' },
  { id: 2, name: 'ماهی و گوشت', count: '+145 محصول', img: './img/main-categories/feature-img2.png' },
  { id: 3, name: 'دسر ها', count: '+25 محصول', img: './img/main-categories/feature-img3.png' },
  { id: 4, name: 'آبمیوه ها', count: '+89 محصول', img: './img/main-categories/feature-img4.png' },
  { id: 5, name: 'غذا های حیوانات', count: '+135 محصول', img: './img/main-categories/feature-img5.png' },
  { id: 6, name: 'میوه های تازه', count: '+155 محصول', img: './img/main-categories/feature-img6.png' },
  { id: 7, name: 'شیر تازه', count: '+25 محصول', img: './img/main-categories/feature-img8.png' },
  { id: 8, name: 'تنقلات', count: '+115 محصول', img: './img/main-categories/feature-img9.png' },
  { id: 8, name: 'تنقلات', count: '+115 محصول', img: './img/main-categories/feature-img9.png' },
];
const main_categoryes = document.querySelector('.main-categoryes');


let indexToAdd = 0;

function createItemElement(item) {
  const div = document.createElement('div');
  div.classList.add('main-category-item', 'text-center', 'ms-4');
  div.innerHTML = `
    <div class="main-category-img-box p-4 d-flex justify-content-center felx-column">
      <img src="${item.img}" alt="${item.name}" class="main-category-img" />
    </div>
    <h4 class="main-category-title mt-3">${item.name}</h4>
    <h6 class="main-category-count">${item.count}</h6>
  `;
  return div;
}

function renderAll(items) {
  main_categoryes.innerHTML = '';
  items.forEach(item => {
    main_categoryes.appendChild(createItemElement(item));
  });
}

renderAll(main_category);

function rotateItems() {
  const items = main_categoryes.querySelectorAll('.main-category-item');
  if (items.length === 0) return;

  // 1. همه آیتم‌ها کلاس حرکت رو اضافه کن
  items.forEach(item => item.classList.add('moving'));

  // 2. وقتی transition تموم شد حذف آخرین و اضافه کردن آیتم جدید
  let transitionedCount = 0;

  items.forEach(item => {
    item.addEventListener('transitionend', () => {
      transitionedCount++;
      if (transitionedCount === items.length) {
        // حذف آخرین آیتم
        if (main_categoryes.lastElementChild) {
          main_categoryes.removeChild(main_categoryes.lastElementChild);
        }

        // اضافه کردن آیتم جدید با کلاس ورود
        const newItem = createItemElement(main_category[indexToAdd]);
        newItem.classList.add('entering');
        main_categoryes.insertBefore(newItem, main_categoryes.firstChild);

        // بعد از انیمیشن ورود کلاس ها رو پاک کن
        newItem.addEventListener('animationend', () => {
          newItem.classList.remove('entering');
        });

        // پاک کردن کلاس حرکت از باقی آیتم‌ها
        main_categoryes.querySelectorAll('.main-category-item').forEach(el => {
          el.classList.remove('moving');
        });

        // برو به آیتم بعدی دایره‌ای
        indexToAdd = (indexToAdd + 1) % main_category.length;
      }
    }, { once: true });
  });
}

setInterval(rotateItems, 5000);


// تایمر ها


const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 991);

function updateTimer() {
  const now = new Date();
  let diff = targetDate - now; // اختلاف به میلی‌ثانیه

  if (diff < 0) {
    diff = 0; // وقتی تموم شد، صفر نشون بده
    clearInterval(timerInterval);
  }

  // محاسبه روز، ساعت، دقیقه، ثانیه
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  // به روز رسانی محتوا
  document.getElementById('days').textContent = days + ' روز';
  document.getElementById('hours').textContent = hours + ' ساعت';
  document.getElementById('minutes').textContent = minutes + ' دقیقه';
  document.getElementById('seconds').textContent = seconds + ' ثانیه';
  document.getElementById('days1').textContent = days + ' روز';
  document.getElementById('hours1').textContent = hours + ' ساعت';
  document.getElementById('minutes1').textContent = minutes + ' دقیقه';
  document.getElementById('seconds1').textContent = seconds + ' ثانیه';
  document.getElementById('days2').textContent = days + ' روز';
  document.getElementById('hours2').textContent = hours + ' ساعت';
  document.getElementById('minutes2').textContent = minutes + ' دقیقه';
  document.getElementById('seconds2').textContent = seconds + ' ثانیه';
}

// بروزرسانی هر 1 ثانیه
const timerInterval = setInterval(updateTimer, 1000);

// شروع اولیه
updateTimer();


const card = document.querySelectorAll('.card')
const custom_product_catd = document.querySelectorAll('.custom-product-card')

card.forEach(item =>{
    item.addEventListener('click' , ()=>{
        window.location.href = '../html/productPage.html'
    })
})
custom_product_catd.forEach(item =>{
    item.addEventListener('click' , ()=>{
        window.location.href = '../html/productPage.html'
    })
})


