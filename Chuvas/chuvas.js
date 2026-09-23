function calcular_precipitacao(local, ano=0, mesNum=0){
    const n = locais.indexOf(local)
    
    if(mesNum==0){
        let x = [...chuvas[n][ano-2014]]
        x.shift()
        return x
    } else{
        return chuvas[n][ano-2014][mesNum]
    }
}
console.log(calcular_precipitacao('Angola',2016))

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

// const selectAno = document.querySelector('#ano')
const botoesAno = document.querySelector('#botoes-ano')
for (let i = 2014;i<2026;i++){
    let item = document.createElement('button')
    // item.classList.add('btn')
    item.classList.add('btnAno')
    item.innerText = i
    //item.value = i
    botoesAno.appendChild(item)
}

const botoesAnos = [...document.querySelectorAll('.btnAno')]
botoesAnos.map((b)=>{
    b.addEventListener('click',(e)=>{
    let ano = e.target.innerText
    let local = document.querySelector('th').innerText
    montar_grafico(ano,local)

    })
})

function montar_grafico(ano, local){
        console.log(ano, local)
    const graficoExistente = Chart.getChart("grafico"); 
    if (graficoExistente) {
            graficoExistente.destroy();
    }
    const graf = new Chart(grafico, {
        type: 'bar',
        data: {
        labels: [...listar_meses()],
        datasets: [{
            label: `${local} - ${ano} (em mm de chuva)`,
            data: [...calcular_precipitacao(local,ano)],
            borderWidth: 1
        }]
        },
        options: {
            color: '#ffffff',
            scales: {
                x:{
                    grid:{
                        display:false // inibe  exibição das linha de grade
                    },
                    ticks: {
                         color: '#00ff00' // Cor do texto do eixo X
                    }
                },
                y: {
                    beginAtZero: true,
                    grid:{
                        display:false //Inibe exibição das linhas de grade
                    },
                    ticks: {
                        color: '#00ff00' // Cor do texto do eixo X
                    }
                }
            }
        }
  });

}

//  corrigir elinação indevida quando é acionado o gráfico
  
