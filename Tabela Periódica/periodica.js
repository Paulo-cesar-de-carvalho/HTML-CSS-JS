function def_item(item){
    return todosElementos[0].indexOf(item)
}
console.log(def_item('Coluna'))

class Elementos{
    constructor(tabela,[...dados]){
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
        this.criacao = this.criar_elemento()
        console.log(this.linha, this.coluna, this.topo)
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
        elementoOutro.setAttribute('style',`text-align:center;font-size:0.8em`)


        const elemento = document.createElement('div')
        elemento.appendChild(elementoZ)
        
        elemento.appendChild(elementoSimb)
        elemento.appendChild(elementoNome)
        elemento.appendChild(elementoOutro)
        
        
        // elemento.height = this.altura
        // elemento.top = this.topo
        // elemento.left = this.esquerda
        elemento.setAttribute('class','cada-elemento')
        //elemento.innerText = this.Z
        elemento.setAttribute('id',`i${this.Z}`)
        elemento.setAttribute('style',`width:${this.largura}px;height:${this.altura}px;top:${this.topo}px;left:${this.esquerda}px`)
        this.tabela.appendChild(elemento)

    }
    posicionar_elemento = ()=>{

    }
}

const divTabela = document.querySelector('#tabela')
for (let i = 1; i<=118;i++){
    const nome = todosElementos[i][2]
    const simbolo = todosElementos[i][1]
    const cadaElemento = new Elementos(divTabela,todosElementos[i])
}