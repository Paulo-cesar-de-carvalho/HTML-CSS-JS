//jogo da forca
//sorteio das palavras
function aleatorio  (min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}

const letrasCorretas = []
const letrasErradas= []


function sortear_palavras(){
    const qtePalavras = Number((document.querySelector('#qte').value))
    const n = aleatorio(0,todosTemas.length-1) //sorteia o tema
    const temaEscolhido = todosTemas[n]
    const x = []
    console.log(temaEscolhido)
    for (let i = 1; i<=qtePalavras; i++){
        const n1 = aleatorio(0,todasPalavras[n].length-1)
        const palavraEscolhida = todasPalavras[n][n1]
        x.push(palavraEscolhida)
    }
    return x
}

function criar_tabela(){
    const palavrasSorteadas = sortear_palavras()
    console.log(palavrasSorteadas)
    const painel  = document.querySelector('#painel')
    palavrasSorteadas.map((e)=>{
        const linha = document.createElement('div')
        linha.setAttribute('class','cada-linha')
        let x = new String( e.toUpperCase())
        let n = x.length
        for (l of x){
           const letra = document.createElement('div')
           letra.setAttribute('class', 'cada-letra')
           letra.setAttribute('data-com',l)
           l = l.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
           letra.setAttribute('data-sem',l)
           //letra.innerText = l
           linha.appendChild (letra)
        }
        painel.appendChild(linha)
    })
}

criar_tabela()
const textoNormalizado = 'índio'
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")//.replace(/[^a-zA-Z]/g, "")

let x = 'índio'.normalize('NFD')//.replace(/[\u300-\u036f]/g,'')
console.log(x, textoNormalizado)

function conferir_letra(letra){
    const gabarito = [...document.querySelectorAll('.cada-letra')]
    let corretos = 0
    gabarito.map((e)=>{
        if(e.dataset.sem == letra ){
            e.innerText = e.dataset.com
            corretos ++

        }
        if (corretos>0){
            letrasCorretas.push(letra)
        } else{
            letrasErradas.push(letra)
        }


    })
    //console.log(gabarito)
}
conferir_letra('A')