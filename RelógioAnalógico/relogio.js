const mostrador = document.querySelector("#mostrador")
const inputRadios = document.querySelectorAll('input[name="modo"]')
let frequencia = Number(document.querySelector('input[name="modo"]:checked').value)

const ponteiro = document.createElement('div')
ponteiro.setAttribute('class','ponteiro')

const segundosDoDia = () =>{
    const tempo = new Date
    const segundos = tempo.getSeconds() + tempo.getMilliseconds() / 1000
    const minutos = tempo.getMinutes() + segundos /60
    const horas = tempo.getHours() + minutos / 60
    return horas * 3600
} 

class Ponteiro {
    //periodos para ponteiros: segundos 1m; minutos 60m, horas 12*60m 
    constructor(periodoM, comprimento, largura,elemMostrador){
        this.largura = largura
        this.comprimento = comprimento
        this.periodo = periodoM
        this.mostrador = elemMostrador
        this.id = `i${periodoM}`
        this.criacao = this.criar() //funcão é chamada quando se cria um novo objeto da classe
        this.eu = document.getElementById(this.id)
        this.frequencia = frequencia
        this.giro = setInterval(this.girar, 50)
    }
    criar = ()=>{
        const pont = document.createElement('div')
        pont.setAttribute('class','ponteiro')
        pont.setAttribute('id',this.id)
        this.mostrador.appendChild(pont)
        const angulo = (segundosDoDia()/ this.periodo * 6 - 90) % 360
        pont.setAttribute('style',`rotate:${angulo}deg;width:${this.comprimento}px;height:${this.largura}px`)
    }
    girar = ()=>{
        frequencia = Number(document.querySelector('input[name="modo"]:checked').value)
        let segundosArredondados = frequencia == 1000? Math.floor(segundosDoDia()) : segundosDoDia()
        const angulo = (segundosArredondados/ this.periodo * 6 - 90) % 360
        const pont1 = this.eu
        pont1.setAttribute('style',`rotate:${angulo}deg;width:${this.comprimento}px;height:${this.largura}px`)

    }

}
const ponteiroS = new Ponteiro(1,155,2,mostrador)
const ponteiroM = new Ponteiro(60,140,4,mostrador)
const ponteiroH = new Ponteiro(12*60,90,10,mostrador)

inputRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        ponteiroS.frequencia = Number(document.querySelector('input[name="modo"]:checked').value)
    })
})


class Algarismos {
    constructor(mostrador, algarismo) {
        this.mostrador = mostrador
        this.algarismo = algarismo
        this.id = `a${algarismo}`
        this.criacao = this.criar()
        this.eu = document.getElementById(this.id)
        this.posicao = this.posicionar()
    }
    criar = ()=>{
        const alg = document.createElement('div')
        alg.setAttribute('class','algarismo')
        alg.setAttribute('id',this.id)
        alg.innerText = this.algarismo  
        this.mostrador.appendChild(alg)
    }
    posicionar = ()=>{
        const tamPoneiro = 180
        let posicaoX =  200 + tamPoneiro * Math.cos((this.algarismo * 30 - 90) * Math.PI / 180) - this.eu.offsetWidth / 2
        let posicaoY =  200 + tamPoneiro * Math.sin((this.algarismo * 30 - 90) * Math.PI / 180) -   this.eu.offsetHeight / 2
        this.eu.setAttribute('style',`left:${posicaoX}px;top:${posicaoY}px`)
    }
}
for (let i = 1; i <= 12; i++) {
    const algarismo = new Algarismos(mostrador, i)
}
