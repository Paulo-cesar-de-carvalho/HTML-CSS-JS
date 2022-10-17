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

for (let p=0 ; p < palavrasListadas.length ;p++){
    
    let palavra = palavrasListadas[p].toUpperCase()
    let nLetra = palavra.length

    //posicionamento vertical
    let linhaInicialPalavra = aleatorio_entre(0,nLinhas-1)
    let colunaInicialPalavra = aleatorio_entre(0, nColunas-nLetra)

    //Impressão da palavra quando possível for:
    for (let i = 0;i<nLetra;i++){
        arrayCompleto[linhaInicialPalavra][colunaInicialPalavra+i]=palavra[i]
    }

}
//console.log(arrayCompleto)
montar_diagrama(arrayCompleto)

// console.log(linhaInicialPalavra+1,colunaInicialPalavra+1)

// for(i = 0; i<100;i++){
//     console.log(aleatorio_entre(65,90))
// }

