todosTemas.map((tema)=>{
    let opcao = document.createElement("option")
    opcao.innerText = tema
    opcoesTemas.appendChild(opcao)
})

function aleatorio_entre(inf, sup){
    return Math.floor(Math.random()*(sup - inf + 1) + inf)
}
function montar_diagrama(arrayCompleto,arrayClasses){
    let tbDiagrama = document.querySelector("#diagrama")
    //Transforma um array em tabela html
    arrayCompleto.map((linha,iLinha)=>{
        let trDiagrama = document.createElement("tr")
        linha.map((e,iColuna)=>{
            let tdDiagrama = document.createElement("td")
            let palavra = arrayClasses[iLinha][iColuna]
            //console.log(`palavra: ${palavra}, linha: ${iLinha}, coluna: ${iColuna}`)
            tdDiagrama.dataset.valor = palavra
            tdDiagrama.innerText = e
            trDiagrama.appendChild(tdDiagrama)
        })
        tbDiagrama.appendChild(trDiagrama)
    })

}
function montar_array (numColunas, numLinhas){
    let arrayCompleto = []
    for (let linha = 1;linha<=numLinhas;linha++){
        let linhaCompleta = []
        for(let coluna =1; coluna <= numColunas;coluna ++){
            linhaCompleta.push ("") //(`L${linha}C${coluna}`)
        }
        arrayCompleto.push (linhaCompleta)
    }
    return arrayCompleto
}

function encaixar_palavra(palavra,arrayCompleto,arrayClasses,dificuldade,incluidas){
    
    const nLin = arrayCompleto.length
    const nCol = arrayCompleto[0].length
    palavra = palavra.toUpperCase()
    let nLetra = palavra.length
    const direcoes = [[0,1],[1,0],[1,1],[1,-1],[-1,0],[0,-1],[-1,-1],[-1,1]]
    const tentativas = 100 
    for (let t = 0; t < tentativas;t++){
        const dir = aleatorio_entre(0,dificuldade-1)
        const dirX = direcoes[dir][0], dirY = direcoes[dir][1]  
        const linInicial = dirY == -1? nLetra-1:0
        const colInicial = dirX == -1? nLetra-1:0 
        const linFinal = dirY == 1 ? nLin-nLetra: nLin-1
        const colFinal = dirX ==1 ?  nCol-nLetra : nCol -1
        console.log(`tentativa: ${t+1} de ${tentativas}, palavra: ${palavra}), direção: ${dir}`  )
        let linhaInicialPalavra = aleatorio_entre(linInicial,linFinal)
        let colunaInicialPalavra = aleatorio_entre(colInicial,colFinal)
        // Testar se é possível escrever neste lugar
        let espacoVazio = false
        for (let i = 0; i < nLetra ; i++){
            let posicao = arrayCompleto[linhaInicialPalavra+dirY*i][colunaInicialPalavra+dirX*i]
            if (posicao == "" || posicao == palavra[i] ){
                espacoVazio = true
            } else{
                espacoVazio = false
                break
            }
        }
        //Impressão da palavra quando possível for:
        if (espacoVazio){
            for (let i = 0;i<nLetra;i++){
                arrayCompleto[linhaInicialPalavra+dirY*i][colunaInicialPalavra+dirX*i]=palavra[i]
                console.log(palavra)
                arrayClasses[linhaInicialPalavra+dirY*i][colunaInicialPalavra+dirX*i]=palavra
            }
           // console.log(arrayClasses)
           // console.log(`${palavra}, linInicial: ${linInicial},  colInicial: ${colInicial},linFinal: ${linFinal}, colFinal: ${colFinal}, dirX: ${dirX}, dirY: ${dirY}`)
            //console.log(`linhaInicialPalavra: ${linhaInicialPalavra}, colunaInicialPalavra: ${colunaInicialPalavra}`)
            incluidas ++
            break
        }
    }
    return incluidas
}
function encaixar_todas_palavras(arrayPalavras,arrayCompleto,arrayClasses,dificuldade){
    let incluidas = 0
    for (palavra of arrayPalavras){         
        incluidas += encaixar_palavra(palavra,arrayCompleto,arrayClasses,dificuldade,0)
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
    liPalavra.addEventListener("click", (e)=>{
        e.target.classList.toggle("palavra-encontrada")
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
            td.setAttribute("class","tdPreenchida")
        }else{
            td.innerText ="-" //letras[aleatorio_entre(0,letras.length-1)]
            td.setAttribute("class","tdErro")

        }
    }
    //ao clicar em uma letra correta:
    let letrasPreenchidas = document.querySelectorAll(".tdPreenchida")
    let totalLetras = letrasPreenchidas.length
    for (cadaLetra of letrasPreenchidas){
        let clicadoCorreto = false
        cadaLetra.addEventListener("click", (e)=>{
            if (!clicadoCorreto && podeJogar){
                let palavra = e.target.dataset.valor
                let letrasDaPalavra = document.querySelectorAll(`[data-valor="${palavra}"]`)
                letrasDaPalavra.forEach((tdLetra)=>{
                    tdLetra.setAttribute("class", "tdPreenchidaCorreta")
                    clicadoCorreto = true
                    contagemAcerto ++
                })
                //e.target.setAttribute("class", "tdPreenchida")
                
                campoPercentual.innerText =`${contagemAcerto} de ${totalLetras} ( ${(contagemAcerto/totalLetras*100).toFixed(2)}%)`
                
                vitoria(contagemAcerto,totalLetras)
            }
            
            //this.setAttribute("id", "nenhum")
        })
    }
    //ao clicar em uma letra incorreta:
    let letrasErradas = document.querySelectorAll(".tdErro")
    for (cadaLetra of letrasErradas){
        let clicadoIncorreto = false
        cadaLetra.addEventListener("click", (e)=>{
            if(!clicadoIncorreto && podeJogar){
                e.target.setAttribute("class", "tdErroClicado")
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
    let arrayClasses = montar_array(nColunas,nLinhas)
    palavrasListadas = escolher_palavras(nPalavras,base)
    let incluidas = encaixar_todas_palavras(palavrasListadas,arrayCompleto,arrayClasses,dificuldade)
    if (!(nPalavras==incluidas)){
        document.getElementById("palavras-não-encaixadas").innerText = `A t e n ç ã o!!! ${nPalavras-incluidas} das palavras listadas não puderam ser encaixadas!!!`
    }else{
        document.getElementById("palavras-não-encaixadas").innerText = ""
    }
    campoStatusJogo.innerText = ""
    
    montar_diagrama(arrayCompleto,arrayClasses)
    //console.log(arrayCompleto)
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


