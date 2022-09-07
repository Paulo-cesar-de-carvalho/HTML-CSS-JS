
var btnContar = document.querySelector("#ctn")
var btnFibo = document.querySelector("#btnFibo")

btnContar.addEventListener("click", contar)


function contar(){
    var textInicio = document.querySelector("#inicio")
    var textFim = document.querySelector("#fim")
    var textPasso = document.querySelector("#passo")
    var inicio = Number(textInicio.value)
    var fim = Number(textFim.value)
    var passo = Number(textPasso.value)
    var res = document.querySelector("#res")

    var acumulado = inicio
    var lista  = inicio


    if (textFim.value.length == 0 || textInicio.value.length == 00 || textPasso.value.length == 00 || passo <= 0){
        res.innerHTML = "Impossível contar - Digite um valor válido nos três campos"
        res.setAttribute("class","erro")
    } else if (inicio <= fim){
        //contagem crescente
        while(acumulado+passo<=fim){
            acumulado = acumulado + passo
            lista  += `\u{1F449} ${acumulado}`
        }
        res.innerHTML = lista + "\u{1F3C1}"
        //contagem decrescente
    } else if(inicio > fim){
        while(acumulado-passo>=fim){
            acumulado = acumulado - passo
            lista  += `\u{1F449} ${acumulado}` //Para adição de emojis: entre crases, contrabarra u e o código unicode entre chaves. unicode.org
        }
        res.innerHTML = lista + "\u{1F3C1}"
    }
    
}

