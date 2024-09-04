function soma(){
    let n1 = Number(window.prompt('digite um numero'))
    let n2 = Number(window.prompt('digite mais um numero'))
    let resultado = n1+n2 
    let txt = window.document.getElementById('txt')
    txt.innerHTML=`A soma é ${resultado}`

  }