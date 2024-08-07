function atualizar (){
    let msg = window.document.getElementById('msg')
    let imagem = window.document.getElementById('img')
    let data = new Date()
    let hora = 22//data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if(hora >= 0 && hora < 12){
        //bom dia
        imagem.src ='assets/tarde.png'
    } else if(hora >= 12 &&  hora <18){
        //boa tarde
        imagem.src ='assets/fotor.png'

    } else {
        imagem.src = 'assets/foto.png'
        document.body.style.background = '#73626e'
        document.body.header.style.color = '#fffff2'
    }
}