const more_img_box = document.querySelectorAll('.more-img-box')
const big_img = document.querySelector('.big-img')
const btn_product_count = document.querySelector('.btn-product-count')
const product_count = document.querySelector('.product-count')


// عوض کردن عکس بزرگ با عکس های کوچک در صورت کلیک
more_img_box.forEach(item =>{
    item.addEventListener('click' , (e)=>{
        
        const img_box = e.currentTarget.firstElementChild;
        const src = img_box.getAttribute('src')
        big_img.setAttribute('src' , src)
        
    })
})

// کم و زیاد کردن مقدار محصول
let count = 1;
btn_product_count.addEventListener('click' , (e)=>{

    if (e.target.classList.contains('plus')){
        count++;
        product_count.textContent = count;
    }
    if (e.target.classList.contains('minus')){
        count--;
        if (count > 0){
            product_count.textContent = count;
        }else{
            count++;
        }
        
    }

})
