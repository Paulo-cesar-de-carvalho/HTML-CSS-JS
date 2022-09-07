
var btnVerificar = document.querySelector("#btn")

btnVerificar.addEventListener("click", verificar_idade)

function verificar_idade(){
    var txtAno = document.querySelector("#ano")
    var ano = Number (txtAno.value)
    var agora = new Date()
    var anoAtual = Number(agora.getFullYear())
    var idade = anoAtual - ano
    var faseVida = ""
    
    if ((txtAno.value.length == 0) || (ano>anoAtual)){
        alert ("Digite um ano válido")
        
    } else {
        if (idade<10){
            faseVida = "criança" 
        } else if (idade<20){
            faseVida = "jovem"
        } else if (idade<70){
            faseVida = "adulto"
        } else {
            faseVida = "idoso"
        } 
    }
    
    var masculino = document.getElementsByName("sex")[0]
    var feminino = document.getElementsByName("sex")[1]
    if (masculino.checked && !feminino.checked){
        var sexo = "masculino"
    } else  {
        var sexo = "feminino"
    }

    var res = document.querySelector("#resultado")
    var enderecoImagem = faseVida +"-" +  sexo + ".png"
    
    txtAno.value = ""
    
    //Criando uma imagem:
    var img = document.createElement("img")
    img.setAttribute("id","foto") // adiconado o atributo id foto ao elemento
    img.setAttribute("src", enderecoImagem)
    res.innerHTML = ""
    res.appendChild(img)
    var area = document.getElementsByTagName("section")[0]
    area.setAttribute("class", sexo)
    
}