const tableTabuleiro = document.querySelector('#tabuleiro')

function montar_tabuleiro(tableTabuleiro, referencia='brancas'){
    for(let x =1; x<=8; x++){
        const cadaLinha = document.createElement('tr')
        for(y=1;y<=8;y++){
            const cadaCasa = document.createElement('td')
            cadaCasa.setAttribute('class','cada-casa')
            cadaCasa.setAttribute('data-nCasa',determinar_nome_casa(x,y,referencia))
            cadaCasa.setAttribute('style',`background-color:${determinar_cor(x,y)}`)
            cadaCasa.innerText = determinar_nome_casa(x,y,referencia)
            cadaLinha.appendChild(cadaCasa)
        }
        tableTabuleiro.appendChild(cadaLinha)
    }
}

montar_tabuleiro(tableTabuleiro,'pretas')
function determinar_cor(x,y){
    let cor = (x % 2 ==0 && y % 2 ==0)|| (x % 2 ==1 && y % 2 ==1) ? 'grey':'black'
    return cor
}
function determinar_nome_casa(x,y,referencia){
    let letras = ['a','b','c','d','e','f','g','h']
    let nome = referencia=='brancas'? letras[y-1]+(9-x):letras[8-y]+x
    return  nome
}


