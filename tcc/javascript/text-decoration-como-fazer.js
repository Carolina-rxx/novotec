const checkboxes = document.querySelectorAll('.cbx')
// seleciona todos os elementos com a classe .cbx

checkboxes.forEach((checkbox, index) =>{
    checkbox.addEventListener('change', function(){
        const text = document.querySelectorAll('.texto')[index]
        if (this.checked){
            text.classList.add('concluido')
        } else {
            text.classList.remove('concluido')
        }
    })
})
