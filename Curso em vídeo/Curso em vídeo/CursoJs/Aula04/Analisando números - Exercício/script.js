
var btnAdd = document.getElementById("btn-add")
var conjunto = []
var res = document.getElementById("res")

btnAdd.addEventListener("click",function(){
    var textNum = document.getElementById("num")
    var num = Number(textNum.value)
    var area = document.getElementById("area")

    res.innerHTML=""

    
    if (num <=0 || num > 100){
        alert ("Erro - Digite um número entre 1 e 100")
    }else if (conjunto.indexOf(num) != -1){
        alert ("Erro - O número digitado já existe")
    } else{
        conjunto.push(num)
        var opc = document.createElement("option")
        opc.text = `Foi adicionado o número: ${num}`
        area.appendChild(opc)

    }
    textNum.value = ""
    textNum.focus()
    
})

var btnVerif = document.querySelector("#btn-verif")
btnVerif.addEventListener("click", analisar_numeros)


function analisar_numeros(){
    
    var qte = conjunto.length
    var soma = 0
    if (qte == 0){
        res.innerHTML = "Adicione pelo menos um valor antes de verificar"
    }else{
        for(var i=0 ; i<qte ; i++ ){
            soma += conjunto[i]
        }
        var maior = conjunto[0]
        var menor = conjunto[0]

        //definindo o maior e o menor elemento.
        for (var posicao in conjunto){
            if (conjunto[posicao] > maior){
                maior = conjunto[posicao]
            }
            if (conjunto[posicao] <menor){
                menor = conjunto[posicao]
            }
        }
        
        res.innerHTML = `<p>Número de elementos selecionados é ${qte}</p>`
        res.innerHTML += `<p>O maior elemento selecionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor elemento selecionado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos elementos selecionados é ${soma}</p>`
        res.innerHTML += `<p>A média dos elementos selecionados é ${((soma/qte).toFixed(2).replace(".",","))}</p>`
    }
}