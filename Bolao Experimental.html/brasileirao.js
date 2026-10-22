function listarTodosTimes(){
    const x = []
    todasPartidas.map((j)=>{
        x.push (j.time1)
    })
    return  [...new Set (x)]
}
const todosTimes = listarTodosTimes()

console.log (listarTodosTimes())

function somar_pontos(time){
    partidasCasa = todasPartidas.filter((j)=>j.time1 == time&& j.placar1 !="")
    let pg = 0, jg=0, v=0, e=0, d=0, gp=0, gc=0, sg=0
    partidasCasa.map((j)=>{
        jg++
        gp += j.placar1
        gc += j.placar2
        sg = gp - gc
        if (j.placar1 > j.placar2){
            pg += 3
            v++
        } else if (j.placar1 == j.placar2){
            pg += 1
            e++
        }else {
            d++
        }
    })

    partidasFora = todasPartidas.filter((j)=>j.time2 == time&& j.placar2 !="")
    partidasFora.map((j)=>{
        jg++
        gp += j.placar2
        gc += j.placar1
        sg = gp - gc
        if (j.placar2 > j.placar1){
            pg += 3
            v++
        } else if (j.placar2 == j.placar1){
            pg += 1
            e++
        }else {
            d++
        }
    })
    return [time,pg,jg,v,e,d,gp,gc,sg]
}

function ordenarTabela(){
    let tabela = []
    todosTimes.map((t)=>{
        tabela.push(somar_pontos(t))
    })
    tabela.sort((a,b)=>{
        if (a[1] == b[1]){
            return b[9] - a[9] // Ordena por saldo de gols
        }
        return b[1] - a[1] // Ordena por pontos
    })
    const cabecalho = ["Time","PG","JG","V","E","D","GP","GC","SG"]
    tabela.unshift(cabecalho)
    return tabela
}

console.log(ordenarTabela())
function montar_pagina(){
    let tabela = ordenarTabela()
    let elementoTable = document.querySelector("#tabela-brasileirao")
    criar_tabela_HTML(elementoTable, tabela)
}

montar_pagina()

// console.log(somar_pontos('Palmeiras'))

function criar_tabela_HTML(elementoTable, array){
    array.map((e,i)=>{
        let cadaLinha = document.createElement("tr")
        e.map((el,ind)=>{
            let cadaCelula = document.createElement(i==0?"th":"td")
            if (ind==0){cadaCelula.setAttribute("class","primeira-coluna")}
            cadaCelula.innerText = el
            cadaLinha.appendChild(cadaCelula)
        })
        elementoTable.appendChild(cadaLinha)
    })
}