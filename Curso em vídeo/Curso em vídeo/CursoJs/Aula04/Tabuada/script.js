var btn = document.querySelector("#btn-tabuada")
var res = document.querySelector("#selecao")
btn.addEventListener("click", montar_tabuada)
 

function montar_tabuada (){
    var txtNumero = document.querySelector("#txtNumero")
    var numero = Number(txtNumero.value)
    res.innerHTML =""
    if (txtNumero.value.length == 0){
        alert ("Digite um número válido")
    }else{
        for (var i = 1; i<=10; i++){
            var item = document.createElement("option")
            item.text = `${numero} X ${i} = ${i*numero}`
            item.value = `valor ${i}`
            res.appendChild(item)
            //console.log(res.text)

        }

    }
    

}