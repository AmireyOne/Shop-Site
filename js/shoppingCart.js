// کم و زیاد کردن مقدار محصول

const btn_product_count = document.querySelectorAll('.btn-product-count')
const all_pay = document.querySelector('.all-pay')
const Maliat = document.querySelector('.maliat')
const all_pays = document.querySelector('.all-pays')
const all_price = document.querySelectorAll('.all-price')



btn_product_count.forEach(item=>{
    let count = 1;
    let all_pay_number = 0;
    
    item.addEventListener('click' , (e)=>{

    if (e.target.classList.contains('plus')){
        count++;
        e.target.nextElementSibling.textContent = count;
        const one_price = e.currentTarget.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent;
        e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = +one_price * count;
        all_price.forEach(item=>{
            
            all_pay_number += +item.textContent;
            all_pay.textContent = all_pay_number;


        })

        Maliat.textContent = all_pay_number * 0.01;

        all_pays.textContent = +Maliat.textContent + all_pay_number;

        

    }
    if (e.target.classList.contains('minus')){
        count--;
        if (count > 0){
            e.target.previousElementSibling.textContent = count;
            const one_price = e.currentTarget.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent;
            e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = +one_price * count;
            
            all_price.forEach(item=>{
            
            all_pay_number -= +item.textContent;
            all_pay.textContent = all_pay_number;   


        })

        Maliat.textContent = all_pay_number * 0.01;

        all_pays.textContent = +Maliat.textContent + all_pay_number;

        }else{
            count++;
        }
        
    }

})
})
