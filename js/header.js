
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const openBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');

  // باز کردن منو
  openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  });

  // بستن منو
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  // بستن منو با کلیک روی اورلی
  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  // بستن منو با کلیک روی لینک‌های منو
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  // باز و بسته کردن زیرمنوها
  document.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling;
      submenu.style.display =
        submenu.style.display === 'block' ? 'none' : 'block';
    });
  });

// کد های مربوط به دسته بندی هدر
  const header_category = [
    {
        id : 1 ,
        name : "آبمیوه",
        img : '../img/category/category-abmive.png'
    } , 
    {
        id : 2 ,
        name : "چای و دمنوش",
        img : '../img/category/category-chay.png'
    } , 
    {
        id : 3 ,
        name : "خواربار",
        img : '../img/category/category-kharbar.png'
    } , 
    {
        id : 4 ,
        name : "میوه",
        img : '../img/category/category-mive.png'
    } , 
    {
        id : 5 ,
        name : "نوشیدنی",
        img : '../img/category/category-noshidani.png'
    } , 
    {
        id : 6 ,
        name : "سبزیجات",
        img : '../img/category/category-sabzi.png'
    } , 
    {
        id : 7 ,
        name : "شیر ولبنیات",
        img : '../img/category/category-shir.png'
    } , 
    {
        id : 8 ,
        name : "تنقلات",
        img : '../img/category/category-tanagholat.png'
    } , 
    {
        id : 9 ,
        name : "زیبایی",
        img : '../img/category/category-zibayi.png'
    } , 
]

const dropdown_content_category = document.querySelector('.dropdown-content-category')

header_category.forEach(item  =>{
  //ساخت المنت ها
  const div_category = document.createElement('div')
  const img_category = document.createElement('img')
  const p_category = document.createElement('p')
  // کلاس دهی و اتریبیوت دهی المنت ها
  div_category.classList.add('category-item')
  img_category.classList.add('category-img')
  img_category.setAttribute('src' , item.img)
  img_category.setAttribute('alt' , item.name)
  p_category.classList.add('category-title')
  p_category.textContent = item.name;
  // موقعیت دهی المنت ها
  dropdown_content_category.appendChild(div_category)
  div_category.appendChild(img_category)
  div_category.appendChild(p_category)

})

const targetDateheader = new Date();
targetDateheader.setDate(targetDateheader.getDate() + 991);

function updateTimer() {
  const now = new Date();
  let diff = targetDateheader - now; // اختلاف به میلی‌ثانیه

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
  let day= days + ' روز';
  let hour= hours + ' ساعت';
  let min= minutes + ' دقیقه';
  let sec = seconds + ' ثانیه';
  document.querySelector('.timer-header').textContent = ` تا پایان حراج : ${day} : ${hour} : ${min} : ${sec}`
}

// بروزرسانی هر 1 ثانیه
const timerIntervalheader = setInterval(updateTimer, 1000);

// شروع اولیه
updateTimer();

const go_sign_page = document.querySelector('.go-sign-page')
go_sign_page.addEventListener('click' , (e)=>{
  
  window.location.href = '../html/signInPage.html'
})
const go_shoppingCart = document.querySelector('.go-shoppingCart')
go_shoppingCart.addEventListener('click' , (e)=>{
  
  window.location.href = '../html/shoppingCart.html'
})
