const mostrador = document.querySelector("#mostrador")
mostrador.innerText = "mostrador aqui"

const ponteiro = document.createElement('div')
ponteiro.setAttribute('class','ponteiro')
ponteiro.innerText = "Ponteiro"
//ponteiro
//mostrador.appendChild(ponteiro)

const segundosDoDia = () =>{
    const tempo = new Date
    const segundos = tempo.getSeconds() + tempo.getMilliseconds() / 1000
    const minutos = tempo.getMinutes() + segundos /60
    const horas = tempo.getHours() + minutos / 60
    return horas * 3600

} 


// console.log(horas,minutos,segundos, segundosDoDia)

mostrador.addEventListener('click', (ev)=>{
    console.log( ev.target)

})

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
        //console.log(this.eu)
        this.giro = setInterval(this.girar, 100)
    }
    criar = ()=>{
        const pont = document.createElement('div')
        pont.setAttribute('class','ponteiro')
        pont.setAttribute('id',this.id)
        this.mostrador.appendChild(pont)
        const angulo = (segundosDoDia()/ this.periodo * 6 - 90) % 360
        console.log(angulo, this.periodo)
        pont.setAttribute('style',`rotate:${angulo}deg;width:${this.comprimento}px;height:${this.largura}px`)
    }
    girar = ()=>{
        const angulo = (segundosDoDia()/ this.periodo * 6 - 90) % 360
        //console.log(angulo)
        const pont1 = this.eu
        //console.log(pont1)
        pont1.setAttribute('style',`rotate:${angulo}deg;width:${this.comprimento}px;height:${this.largura}px`)

    }

}
const ponteiroS = new Ponteiro(1,160,2,mostrador)
const ponteiroM = new Ponteiro(60,130,4,mostrador)
const ponteiroH = new Ponteiro(12*60,110,10,mostrador)

