let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')

let menuMobile = document.querySelector('#menu-mobile') /*expande o menu mobile*/

let body = document.querySelector('body') /* não vai deixar rolar a pagina  */

btnMenuMob.addEventListener('click', ()=>{ 
    /*cria uma classe dinamica no js*/
    /* o toggle adiciona e remove a classe*/

    /*vai deixar animado fazendo virar um x*/
    line1.classList.toggle('ativo1')   
    line2.classList.toggle('ativo2')  
     
    /*vai fazer o efeito de expansao do menu mob*/
    menuMobile.classList.toggle('abrir')

    /* não vai deixar rolar a pagina enquanto o botão estiver aberto*/
    body.classList.toggle('no-overflow')

})

