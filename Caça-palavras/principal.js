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
function encaixar_palavra(palavra,arrayCompleto,dificuldade,incluidas){
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
    return incluidas

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
function encaixar_todas_palavras(arrayPalavras,arrayCompleto,dificuldade){
    let incluidas = 0
    for (palavra of arrayPalavras){ 
        
        incluidas = incluidas + encaixar_palavra(palavra,arrayCompleto,dificuldade,0)
    }
    return incluidas    
}
function escolher_palavras (quantidade, base){
    let baseVolatil = base
    let arrayEscolhidos = []
    let sorteado
    for (i=0;i<quantidade;i++){
        sorteado = aleatorio_entre(0,base.length-1)
        arrayEscolhidos.push (baseVolatil[sorteado])
        baseVolatil.splice(sorteado,1)
    }
    return arrayEscolhidos.sort()
}
function listar_palavras (palavra, ancora){
    let liPalavra = document.createElement("li")
    liPalavra.innerText = palavra
    ancora.appendChild(liPalavra)
}
function lsitar_todas_palavras (arrayPalavras){
    let listaPalavras = document.querySelector("#palavras")
    listaPalavras.innerText = ""
    arrayPalavras.sort()
    for (i=0;i<arrayPalavras.length;i++){
        listar_palavras(arrayPalavras[i], listaPalavras)
    }
}


//incluir novo diagrama:
let btnNovoDiagrama = document.querySelector("#btn-novo")
btnNovoDiagrama.addEventListener("click",function(){
    document.querySelector("#diagrama").innerText = ""
    nLinhas = document.querySelector("#linhas").value
    nColunas = document.querySelector("#colunas").value
    dificuldade = 2 ** (document.querySelector("#dificuldade").selectedIndex + 1) 
    nPalavras = document.getElementById("n-palavras").value
    tema = document.querySelector("#tema").selectedIndex
    
    let arrayCompleto = montar_array(nColunas,nLinhas)
    palavrasListadas = escolher_palavras( nPalavras,todasPalavras[tema])
    let incluidas = encaixar_todas_palavras(palavrasListadas,arrayCompleto,dificuldade)
    preencher_vazias(arrayCompleto)
    montar_diagrama(arrayCompleto)
    console.log(incluidas)
    lsitar_todas_palavras(palavrasListadas)
    
})

//alterna entre exibir as palavras e ocultar
let selectExibePalavras = document.querySelector ("#exibir-palavra")
selectExibePalavras.addEventListener("change",function(){
    if(this.selectedIndex==1){
        document.querySelector("#palavras").setAttribute("class","invisivel")
    } else{
        document.querySelector("#palavras").setAttribute("class","palavras")
    }
})

//comandos ao logar:
let arrayCompleto = montar_array(nColunas,nLinhas)
palavrasListadas = escolher_palavras(nPalavras,paises)
let incluidas = encaixar_todas_palavras(palavrasListadas,arrayCompleto,dificuldade)
//preencher_vazias(arrayCompleto)
console.log(incluidas)
montar_diagrama(arrayCompleto)
lsitar_todas_palavras(palavrasListadas)
//console.log (escolher_palavras(25,paises))


//let teste = [1,2,"testes",4,5,"testes"]
//console.log(teste.indexOf("teste"))

todosTds = document.querySelectorAll("td")
for (td of todosTds){
    if (td.innerText != ""){
        td.setAttribute("class","tdPreenchida")
        td.setAttribute("id","tdPreenchida")
    }else{
        td.innerText = letras[aleatorio_entre(0,letras.length-1)]

    }
}









