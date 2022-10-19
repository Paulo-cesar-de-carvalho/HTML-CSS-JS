function aleatorio_entre(inf, sup){
    return Math.floor(Math.random()*(sup - inf + 1) + inf)
}


function montar_diagrama(arrayCompleto){
    //Transforma um array em tabela html
    let numLinhas = arrayCompleto.length
    let numColunas = arrayCompleto[0].length

    let tbDiagrama = document.querySelector("#diagrama")

    for (let linha = 1;linha<=numLinhas;linha++ ){
        let trDiagrama = document.createElement("tr")
        for(let coluna = 1; coluna <= numColunas; coluna++){
            let tdDiagrama = document.createElement("td")
            tdDiagrama.innerText = arrayCompleto[linha-1][coluna-1]
            trDiagrama.appendChild(tdDiagrama)            
        }
        tbDiagrama.appendChild(trDiagrama)
    }

}
function montar_array (numColunas, numLinhas){
    let arrayCompleto = []
    for (let linha = 1;linha<=numLinhas;linha++){
        let linhaCompleta = []
        for(let coluna =1; coluna <= numColunas;coluna ++){
            // linha = (linha.length == 1)?`0${linha.toString()}`:linha.toString()
            // coluna = (coluna.length == 1)?`0${coluna.toString()}`:coluna.toString()
            
            linhaCompleta.push ("") //(`L${linha}C${coluna}`)
        }
        arrayCompleto.push (linhaCompleta)
    }
    return arrayCompleto
}

function encaixar_palavra(palavra,arrayCompleto){
    palavra = palavra.toUpperCase()
    let nLetra = palavra.length
    direcao = aleatorio_entre(0,dificuldade-1)
    switch (direcoes[direcao]){
        case "horizontal" :  
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(0,nLinhas-1)
                let colunaInicialPalavra = aleatorio_entre(0, nColunas-nLetra)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra][colunaInicialPalavra+i] == "" || arrayCompleto[linhaInicialPalavra][colunaInicialPalavra+i] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra][colunaInicialPalavra+i]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "vertical" : 
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(0,nLinhas-nLetra)
                let colunaInicialPalavra = aleatorio_entre(0, nColunas-1)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra+i][colunaInicialPalavra] == "" || arrayCompleto[linhaInicialPalavra+i][colunaInicialPalavra] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra + i][colunaInicialPalavra]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "diagonalPrincipal" :  
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(0,nLinhas-nLetra)
                let colunaInicialPalavra = aleatorio_entre(0, nColunas-nLetra)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra+i][colunaInicialPalavra+i] == "" || arrayCompleto[linhaInicialPalavra+i][colunaInicialPalavra+i] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra + i][colunaInicialPalavra + i]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "diagonalSecundária" :  
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(nLetra-1,nLinhas-1)
                let colunaInicialPalavra = aleatorio_entre(0, nColunas-nLetra)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra-i][colunaInicialPalavra+i] == "" || arrayCompleto[linhaInicialPalavra-i][colunaInicialPalavra+i] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra - i][colunaInicialPalavra + i]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "horizontalInvertida" :  
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(0,nLinhas-1)
                let colunaInicialPalavra = aleatorio_entre(nLetra-1, nColunas-1)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra][colunaInicialPalavra-i] == "" || arrayCompleto[linhaInicialPalavra][colunaInicialPalavra-i] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra][colunaInicialPalavra-i]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "verticalSubindo" : 
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(nLetra-1,nLinhas-1)
                let colunaInicialPalavra = aleatorio_entre(0, nColunas-1)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra-i][colunaInicialPalavra] == "" || arrayCompleto[linhaInicialPalavra-i][colunaInicialPalavra] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra - i][colunaInicialPalavra]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "diagonalPrincialinvertida" :  
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(nLetra-1,nLinhas-1)
                let colunaInicialPalavra = aleatorio_entre(nLetra-1, nColunas-1)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra-i][colunaInicialPalavra-i] == "" || arrayCompleto[linhaInicialPalavra-i][colunaInicialPalavra-i] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra - i][colunaInicialPalavra - i]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        case "diagonalSecundáriaInvertida" :  
            for (let t = 0; t < tentativas;t++){
                let linhaInicialPalavra = aleatorio_entre(0,nLinhas-nLetra)
                let colunaInicialPalavra = aleatorio_entre(nLetra-1, nColunas-1)
                // Testar se é possível escrever neste lugar
                let espacoVazio = false
                for (let i = 0; i < nLetra ; i++){
                    if (arrayCompleto[linhaInicialPalavra+i][colunaInicialPalavra-i] == "" || arrayCompleto[linhaInicialPalavra+i][colunaInicialPalavra-i] == palavra[i] ){
                        espacoVazio = true
                    } else{
                        espacoVazio = false
                        break
                    }
                }
                //Impressão da palavra quando possível for:
                if (espacoVazio){
                    for (let i = 0;i<nLetra;i++){
                        arrayCompleto[linhaInicialPalavra + i][colunaInicialPalavra - i]=palavra[i]
                    }
                    incluidas ++
                    break
                }
            }
            break
        default :
            console.log("nenhum")
    
    }

}

function preencher_vazias (arrayComVazias){
    for (i=0; i<arrayComVazias.length;i++){
        for(a=0; a<arrayComVazias[0].length; a++){
            if (arrayComVazias[i][a] == "")
            arrayComVazias[i][a] = letras[aleatorio_entre(0,25)]
        }
    }
    return arrayComVazias
}


let btnNovoDiagrama = document.querySelector("#btn-novo")
btnNovoDiagrama.addEventListener("click",function(){
    document.querySelector("#diagrama").innerText = ""
    let arrayCompleto = montar_array(nColunas,nLinhas)
    
    let incluidas = 0

    //cada palavra
    for (palavra of palavrasListadas){ 
        encaixar_palavra(palavra,arrayCompleto)
    }
    preencher_vazias(arrayCompleto)
    montar_diagrama(arrayCompleto)

    
})


let arrayCompleto = montar_array(nColunas,nLinhas)

//cada palavra
let incluidas = 0
for (palavra of palavrasListadas){ 
    encaixar_palavra(palavra,arrayCompleto)
}

preencher_vazias(arrayCompleto)

//console.log(arrayCompleto)
console.log(incluidas)
montar_diagrama(arrayCompleto)

// console.log(linhaInicialPalavra+1,colunaInicialPalavra+1)

// for(i = 0; i<100;i++){
//     console.log(aleatorio_entre(65,90))
// }

let listaPalavras = document.querySelector("#palavras")

function listar_palavras (palavra){
    let liPalavra = document.createElement("li")
    liPalavra.innerText = palavra
    listaPalavras.appendChild(liPalavra)
}

palavrasListadas.sort()
for (i=0;i<palavrasListadas.length;i++){
    listar_palavras(palavrasListadas[i])
}



