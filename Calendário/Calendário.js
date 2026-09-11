const area_Calendario = document.querySelector('#dia-do-mes')
const divMesAno = document.querySelector('#mes-ano')
//Construção da classe dia:
let posicao = 0
class Dia{
    constructor(dataRef, areaCalendario){
        posicao++
        dataRef = new Date(dataRef)
        this.areaCalendario = areaCalendario
        this.dia = dataRef.getDate()
        this.mes = dataRef.getMonth()
        this.ano = dataRef.getFullYear()
        this.diaSemana = dataRef.getDay()
        this.primeiroDiaMes = this.determinar_primeiro_dia_mes()
        this.primeiroDiaCalendario = this.determinar_primeiro_dia_calendario()
        this.largura = this.areaCalendario.offsetWidth/7
        this.altura = this.areaCalendario.offsetHeight/7
        this.top = (Math.ceil(posicao/7)-1)*this.altura+60
        this.left = ((posicao-1) % 7)*this.largura
        this.dataAtual = new Date (this.primeiroDiaCalendario.setDate(this.primeiroDiaCalendario.getDate()+posicao-1) )
        this.diaAtual = this.dataAtual.getDate()
        this.criacao = this.criar_dia()
        this.diasDaSemana = this.criar_dias_semana()
        
    }
    criar_dia = () =>{
        const d = document.createElement('div')
        d.setAttribute('class','novo-dia')
        d.innerText = this.diaAtual
        let estilo = `top:${this.top}px;left:${this.left}px;width:${this.largura}px;height:${this.altura}px`  
        if (this.dataAtual.getDay() == 0){estilo += `;border-color:orangered; color:orangered;`}
        let hoje = new Date()
        if (this.dataAtual.getFullYear() == hoje.getFullYear() && this.dataAtual.getMonth() == hoje.getMonth() && this.dataAtual.getDate() == hoje.getDate() ){
            estilo += `;background-color: green`
        }
        if (this.mes !== this.dataAtual.getMonth()){estilo ='display:none'}
        d.setAttribute('style',estilo)
        this.areaCalendario.appendChild(d)
        const top = 0
    }
    determinar_primeiro_dia_mes = () => {
        return new Date(this.ano, this.mes, 1)
    }
    determinar_primeiro_dia_calendario = () =>{
        let x = this.determinar_primeiro_dia_mes()
        x = new Date (x - x.getDay()*3600*24*1000)
        return x
    }
    criar_dias_semana = () =>{
        if (posicao<=7){
            const diaSemana = (this.dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' })).replace('-feira',"")
            const divTitulo = document.createElement('div')
            divTitulo.innerHTML = diaSemana
            divTitulo.setAttribute('class','dia-semana')
            divTitulo.setAttribute('style',`left:${this.left}px;width:${this.largura}px`)
            this.areaCalendario.appendChild(divTitulo)
        }
    }
}

function montar_mes(data_Ref, area){
    area.innerHTML = ""
    for(let i = 1;i<=42;i++){
        const novoDia = new Dia(data_Ref,area)
    }
    divMesAno.innerHTML = `${dataRef.toLocaleString('pt-BR', { month: 'long' }).toUpperCase()}   ${dataRef.getFullYear()}`
}   
 
let dataRef = new Date()  
montar_mes(new Date(),area_Calendario)
   
const botoes = [...document.querySelectorAll('#controles input')]

botoes.map((b)=>{
    b.addEventListener('click',(e) => {
        posicao = 0
        const adicao = Number(e.target.dataset.valor)
        dataRef.setMonth(dataRef.getMonth()+adicao)
        montar_mes(dataRef, area_Calendario)
    })
})

    //parei criando feriados:
    function retornar_feriados (dataRef){
        let original = [[1,1],[21,4],[1,5],[7,9],[12,10],[2,11],[15,11],[25,12]]
        let feriados = []
        for (let i in original){
            feriados.push (new Date(dataRef.getFullYear(),Number(original[i][1])-1,Number(original[i][0])))
        }
        return feriados
    }
