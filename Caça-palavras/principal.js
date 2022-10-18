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

let arrayCompleto = montar_array(nColunas,nLinhas)
let tentativas = 50
let incluidas = 0
let direcao = 0 // 1-horizontal; 2-vertica; 3-diagonal descendo
let dificuldade = 3




//cada palavra
for (let p = 0 ; p < palavrasListadas.length ;p++){
    
    let palavra = palavrasListadas[p].toUpperCase()
    let nLetra = palavra.length
    direcao = aleatorio_entre(1,dificuldade)

    //posicionamento horizontal
    if (direcao == 1){
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
    }
    
    //posicionamento vertical
    if (direcao == 2){
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
    }
    //posicionamento diagonal
    if (direcao == 3){
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

preencher_vazias(arrayCompleto)

//console.log(arrayCompleto)
console.log(incluidas)
montar_diagrama(arrayCompleto)

// console.log(linhaInicialPalavra+1,colunaInicialPalavra+1)

// for(i = 0; i<100;i++){
//     console.log(aleatorio_entre(65,90))
// }

