
function carregar(){
    var img = document.querySelector("#imagem")
    var msg = document.querySelector("#msg")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora <12){
        img.src = "manha.jpeg"
        document.body.style.background = "#c6b200"
    }else if (hora<18){
        img.src = "tarde.jpeg"
        document.body.style.background = "#fc8e45"
    }else{
        img.src = "noite.jpeg"
        document.body.style.background = "#141f25"
    }


}