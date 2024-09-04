function calcular(){
    let nome = window.prompt('digite seu nome')
    let n1 = Number(window.prompt('digite sua primeira nota'))
    let n2 = Number(window.prompt('digite sua segunda nota'))
    let resultado = (n1+n2)/2
    let txtnome = window.document.getElementById("txt-nome")
    let notas = window.document.getElementById("notas")
    let notas = window.document.getElementById("notas")
    txtnome.innerHTML= `Calculando a média final de ${nome}`
    
}