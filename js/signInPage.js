const create_accont = document.querySelector('.create-accont')
const go_signIn = document.querySelector('.go-signIn')
const sign_box = document.querySelector('.sign-box')
const sign_up_box = document.querySelector('.sign-up-box')

create_accont.addEventListener('click' , (e)=>{
    
    e.preventDefault()
    sign_box.style.display = 'none'
    sign_up_box.style.display = 'block'
})
go_signIn.addEventListener('click' , (e)=>{
    
    e.preventDefault()
    sign_box.style.display = 'block'
    sign_up_box.style.display = 'none'
})