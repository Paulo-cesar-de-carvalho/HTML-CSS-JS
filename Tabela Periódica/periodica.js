function def_item(item){
    return todosElementos[0].indexOf(item)
}
function def_max_min(item){
    const x = []
    todosElementos.map((e,i)=>{
        if (i>0){
            x.push((e[def_item(item)]))
        }
    })
    console.log(x)
    return [Math.max(...x),Math.min(...x)]
}
//console.log(def_max_min('Massa atômica'))

const valoresElementoDestaque = []
//Botões

const temaBotoes = ['Grupo','Massa atômica','Subnível','Período','Nêutrons','Família','Estado','PF - K','PF - ºC','PE -K','PE - º C','Eletroneg.','Afinidade El.','Valência','Potencial de ionização','Raio','Massa específica','Condutividade','Abundancia','Ano descoberta','Camadas']
console.log (temaBotoes.length)
const areaBotoes = document.querySelector('#botoes')
temaBotoes.map((e)=>{
    const botao = document.createElement('button')
    botao.classList.add('cada-botao')
    botao.value = e
    botao.innerText = e
    areaBotoes.appendChild(botao)
    
    botao.addEventListener('click',(e)=>{
        criar_tabela(e.target.innerText)        
    })
})

//criar o método colorir para não precisar criar nova tabela a cada alteração
class Elementos{
    constructor(tabela,elementoDestaque,[...dados]){
        this.elementoDestaque = elementoDestaque
        this.vrElementoDestaque = dados[def_item(elementoDestaque)].replace(',','.')
        valoresElementoDestaque.push(this.vrElementoDestaque)
        this.Z = dados[0]
        this.simbolo = dados[1]
        this.nome = dados[2]
        this.tabela = tabela
        this.largura = tabela.offsetWidth/18
        this.altura = this.largura
        this.linha = dados[def_item('Grupo')]=='Lantanídios'? 9: dados[def_item('Grupo')]=='Actinídios'? 10: dados[def_item('Período')]
        this.coluna = dados[def_item('Coluna')]
        this.esquerda = (this.coluna-1)*this.largura
        this.topo = (this.linha-1)*this.altura
       
        this.id = `i${this.Z}`
        this.criacao = this.criar_elemento()
        this.eu = document.getElementById(this.id)
        
    }
    criar_elemento = ()=>{
        const elementoZ = document.createElement('div')
        elementoZ.innerText = ` ${this.Z}`
        elementoZ.setAttribute('style',`text-align:left;height:${this.altura/4}px;font-size:0.8em`)
        const elementoNome = document.createElement('div')
        elementoNome.innerText = this.nome
        elementoNome.setAttribute('style',`text-align:center;font-size:0.8em`)
        const elementoSimb = document.createElement('div')
        elementoSimb.innerText = this.simbolo
        elementoSimb.setAttribute('style',`text-align:center;font-size:0.8em;font-weight:bold`)
        const elementoOutro = document.createElement('div')
        elementoOutro.innerText = this.vrElementoDestaque
        elementoOutro.setAttribute('style',`text-align:center;font-size:0.8em`)


        const elemento = document.createElement('div')
        elemento.appendChild(elementoZ)
        
        elemento.appendChild(elementoSimb)
        elemento.appendChild(elementoNome)
        elemento.appendChild(elementoOutro)
        
        elemento.setAttribute('class','cada-elemento')
        elemento.setAttribute('id',this.id)
        elemento.setAttribute('style',`width:${this.largura}px;height:${this.altura}px;top:${this.topo}px;left:${this.esquerda}px;background-color:${variacao_azul(this.vrElementoDestaque,def_max_min(this.elementoDestaque)[1],def_max_min(this.elementoDestaque)[0])}`)
        this.tabela.appendChild(elemento)

    }
    colorir_elemento = (max,min)=>{

    }
}
function criar_tabela(elementoDestaque){
    const divTabela = document.querySelector('#tabela')
    divTabela.innerHTML = ""
    const titulo = document.createElement('div')
    titulo.innerText = `Elemento em destaque: ${elementoDestaque}`
    titulo.setAttribute('style','width:500px;position:absolute;top:50px;left:250px;font-size:2em')
    divTabela.appendChild(titulo)
    

    for (let i = 1; i<=118;i++){
        const cadaElemento = new Elementos(divTabela,elementoDestaque,todosElementos[i])
    }
}

criar_tabela('Subnível')

function variacao_azul(valor,min,max){
    const rInf=135,gInf=206,bInf=255,rSup=31,gSup=48,bSup=136
    const perc = (valor-min)/(max-min) 
    let r = Math.floor((rSup-rInf)*perc+rInf)
    let g = Math.floor((gSup-gInf)*perc+gInf)
    let b = Math.floor((bSup-bInf)*perc+bInf)

    return `rgb(${r},${g},${b})`
}

console.log(variacao_azul(5,1,7))