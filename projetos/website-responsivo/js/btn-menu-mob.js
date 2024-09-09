let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menuMobile = document.querySelector('#menu-mobile')

btnMenuMob.addEventListener('click', ()=>{
    /*cria uma classe dinamica no js*/

    line1.classList.toggle('ativo1')   
    line2.classList.toggle('ativo2')  

    /* o toggle adiciona e remove a classe*/

    menuMobuile.classList.toggle('abrir')
})

