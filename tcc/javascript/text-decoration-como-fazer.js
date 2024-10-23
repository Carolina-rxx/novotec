const feito = document.querySelector('.li')
const feito2 = document.getElementsByName('label')

feito2 = addEventListener('click', ()=>{
    feito1.classList.toggle('concluido')
})
feito.addEventListener('click', ()=>{
    feito.classList.toggle('concluido')
})