const header = document.querySelector('header');
window.addEventListener('scroll', handleScroll)
function handleScroll(){
    let y = window.pageYOffset
    if(y>0){
        header.classList.add('color-scroll')

    }
    else{
        header.classList.remove('color-scroll')
    }
    
}
const bar = document.querySelector('.mobile')
const nav = document.querySelector('.navbar')
const close = document.querySelector('#close')
bar.addEventListener('click', handleClick)

function handleClick(){
nav.classList.add('active')
}
close.addEventListener('click',handleClickClose)

function handleClickClose(){
    nav.classList.remove('active')
}

const pro = document.querySelectorAll('.pro')

const handleClickPro = ()=>{
    window.location.href='sproduct.html'
}
pro.forEach(el=>el.addEventListener('click', handleClickPro))
.addEventListener('click', handleClickPro)
