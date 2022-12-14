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
function listar_cada_palavra (palavra, ancora){
    let liPalavra = document.createElement("li")
    liPalavra.innerText = palavra
    let clicado = false
    liPalavra.addEventListener("click", function(){
        if (!clicado){
            this.setAttribute("class","palavra-encontrada")
            clicado = true
        }else{
            this.removeAttribute("class", "palavra-encontradaa")
            clicado = false
        }
        
    })
    ancora.appendChild(liPalavra)
}
function listar_todas_palavras (arrayPalavras){
    let listaPalavras = document.querySelector("#palavras")
    listaPalavras.innerText = ""
    arrayPalavras.sort()
    for (i=0;i<arrayPalavras.length;i++){
        listar_cada_palavra(arrayPalavras[i], listaPalavras)
    }
}
function preencher_vazias_com_configuracao (){
    contagemAcerto = 0
    contagemErro = 0
    todosTds = document.querySelectorAll("td")
    let campoQteErros = document.querySelector("#quantidade-erros")
    let campoPercentual = document.querySelector("#percentual-concluído")
    campoQteErros.innerText = 0
    campoPercentual.innerText = 0

    //inclusao de classe e id e também preenchimento das letras nos espaços vazios
    for (td of todosTds){
        if (td.innerText != "" ){
            td.setAttribute("id","tdPreenchida")
        }else{
            td.innerText = letras[aleatorio_entre(0,letras.length-1)]
            td.setAttribute("id","tdErro")

        }
    }
    //ao clicar em uma letra correta:
    let letrasPreenchidas = document.querySelectorAll("#tdPreenchida")
    let totalLetras = letrasPreenchidas.length
    for (cadaLetra of letrasPreenchidas){
        let clicadoCorreto = false
        cadaLetra.addEventListener("click", function(){
            if (!clicadoCorreto && podeJogar){
                this.setAttribute("class", "tdPreenchida")
                contagemAcerto ++
                campoPercentual.innerText =`${contagemAcerto} de ${totalLetras} ( ${(contagemAcerto/totalLetras*100).toFixed(2)}%)`
                clicadoCorreto = true
                vitoria(contagemAcerto,totalLetras)
            }
            
            //this.setAttribute("id", "nenhum")
        })
    }
    //ao clicar em uma letra incorreta:
    let letrasErradas = document.querySelectorAll("#tdErro")
    for (cadaLetra of letrasErradas){
        let clicadoIncorreto = false
        cadaLetra.addEventListener("click", function(){
            if(!clicadoIncorreto && podeJogar){
                this.setAttribute("class", "tdErro")
                contagemErro ++
                campoQteErros.innerText = (`${contagemErro}`)
                clicadoIncorreto = true
                game_over(contagemErro)
            }
            
        })
    }
}
function montar_pagina_completa (nColunas,nLinhas,nPalavras,base,dificuldade){
    let arrayCompleto = montar_array(nColunas,nLinhas)
    palavrasListadas = escolher_palavras(nPalavras,base)
    let incluidas = encaixar_todas_palavras(palavrasListadas,arrayCompleto,dificuldade)
    if (!(nPalavras==incluidas)){
        document.getElementById("palavras-não-encaixadas").innerText = `A t e n ç ã o!!! ${nPalavras-incluidas} das palavras listadas não puderam ser encaixadas!!!`
    }else{
        document.getElementById("palavras-não-encaixadas").innerText = ""
    }
    campoStatusJogo.innerText = ""
    
    montar_diagrama(arrayCompleto)
    listar_todas_palavras(palavrasListadas)
    preencher_vazias_com_configuracao ()
    momentoInicial = (new Date()).getTime()
}
function game_over(qteErros){
    if (qteErros > limiteErros){
        podeJogar = false
        campoStatusJogo.innerHTML = "<strong>Que Pena!! Você perdeu</strong>"
        campoStatusJogo.setAttribute("class", "atencao")
    }
}
function vitoria (acertos, totalLetras){
    if (acertos>=totalLetras){
        momentoFinal = (new Date()).getTime()
        campoStatusJogo.innerText = `Parabens!!! Você encontrou todas as palavras em ${((momentoFinal-momentoInicial)/1000).toFixed(2)} segundos`
        campoStatusJogo.setAttribute("class", "mensagem-vitoria")
        podeJogar = false
    }        
}
function resposta(){
    let letrasCorretas = document.querySelectorAll("#tdPreenchida")
    for (tdLetra of letrasCorretas){
        tdLetra.setAttribute("class", "tdPreenchida")
    }
    game_over(limiteErros + 1)
}
montar_pagina_completa(nColunas,nLinhas,nPalavras,todasPalavras[aleatorio_entre(0,todasPalavras.length-1)],dificuldade)

//incluir novo diagrama:
let btnNovoDiagrama = document.querySelector("#btn-novo")
btnNovoDiagrama.addEventListener("click",function(){
    document.querySelector("#diagrama").innerText = ""
    nLinhas = document.querySelector("#linhas").value
    nColunas = document.querySelector("#colunas").value
    dificuldade = 2 ** (document.querySelector("#dificuldade").selectedIndex + 1) 
    nPalavras = document.getElementById("n-palavras").value
    tema = document.querySelector("#tema").selectedIndex - 1
    podeJogar = true
    montar_pagina_completa(nColunas,nLinhas,nPalavras,todasPalavras[tema],dificuldade)
    
})

// contar tempo (transformar em minutos)
// configurar versão para impresão
// colocar simbolo página inicial

