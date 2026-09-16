function calcular_precipitacao(local, ano=0, mesNum=0){
    const n = locais.indexOf(local)
    if(mesNum==0){
        (chuvas[n][ano-2014]).shift()
        return chuvas[n][ano-2014]
    } else{
        return chuvas[n][ano-2014][mesNum]
    }
}

function listar_meses(){
    let x = []
    for (i=0;i<12;i++){
        d = new Date(2014,i,1)
        x.push( d.toLocaleString('pt-BR', { month: 'short' }).toUpperCase().replace('.',''))
    }
    return x
}


function montar_tabela(local){
    const indiceLocal = locais.indexOf(local)
    tabelaChuva = document.querySelector('#tabela-chuva')
    tabelaChuva.innerText = ''
    let meses = listar_meses()
    meses.unshift(local)
    chuvas[indiceLocal].unshift(meses)
    criar_tabela_HTML(tabelaChuva,chuvas[indiceLocal])
    chuvas[indiceLocal].shift()
  
}

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
const botoes = [...document.querySelectorAll('.btn')]
botoes.map((b,i,arr)=>{
    b.addEventListener('click',(e)=>{
        arr.map((b)=>{ //para desmarcar o clicado de todos botoes 
            b.classList.remove('clicado')
        })
        e.target.classList.toggle('clicado')
        montar_tabela(e.target.value)
    })
})    
montar_tabela('Retiro')

const selectAno = document.querySelector('#ano')
for (let i = 2014;i<2026;i++){
    let item = document.createElement('option')
    item.text = i
    item.value = i
    selectAno.appendChild(item)
}

selectAno.addEventListener('change',(e)=>{
    let ano = e.target.value
    let local = document.querySelector('th').innerText
    montar_grafico(ano,local)

})

function montar_grafico(ano, local){
        console.log(ano, local)
    //Gráfico:

    // const grafico = document.querySelector('#grafico')
    //  if (graf !== null) {
    //     graf.destroy();
    // }
    const graficoExistente = Chart.getChart("grafico"); // Passa o ID do canvas
        if (graficoExistente) {
             graficoExistente.destroy();
}


    const graf = new Chart(grafico, {
        type: 'bar',
        data: {
        labels: [...listar_meses()],
        datasets: [{
            label: '# of Votes',
            data: [...calcular_precipitacao(local,ano)],
            borderWidth: 1
        }]
        },
        options: {
            scales: {
                x:{
                    grid:{
                        display:false // inibe  exibição das linha de grade
                    }
                },
                y: {
                    beginAtZero: true,
                    grid:{
                        display:false //Inibe exibição das linhas de grade
                    }
                }
            }
        }
  });

}


  
