function data_da_pascoa (ano){
    let c = Math.floor(ano / 100)
    let n = ano - (19 * Math.floor(ano / 19))
    let k = Math.floor((c - 17) / 25)
    let i1 = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + (19 * n) + 15
    let i2 = i1 - (30 * Math.floor(i1 / 30))
    let i3 = i2 - (Math.floor(i2 / 28) * (1 - Math.floor(i2 / 28)) * Math.floor(29 / (i2 + 1)) * Math.floor((21 - n) / 11))
    let j1 = ano + Math.floor(ano / 4) + i3 + 2 - c + Math.floor(c / 4)
    let j2 = j1 - (7 * Math.floor(j1 / 7))
    let l = i3 - j2
    let m = 3 + Math.floor((l + 40) / 44)
    let d = l + 28 - (31 * Math.floor(m / 4))
    m = Math.floor(m / 1)
    m = m < 10 ? `0${m}` : m
    d = Math.floor(d / 1)
    d = d < 10 ? `0${d}` : d

    let dataDaPascoa = new Date (ano, m - 1, d) // Note: Month is 0-indexed in JavaScript Date object

    return dataDaPascoa
}

let inputAnoPascoa = document.querySelector("#data-pascoa")
inputAnoPascoa.addEventListener("change", (e) =>{
    let localResutado = document.querySelector("#resultado-data-pascoa")
    localResutado.innerText = data_da_pascoa(Number(e.target.value)).toLocaleDateString('pt-BR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
}) 

function calcularFeriados(ano) {
    const pascoa = data_da_pascoa(ano);
    const feriados = [
        { nome: "Confraternização Universal", data: new Date(ano, 0, 1) },
        { nome: "Segunda-feira do Carnaval", data: new Date(pascoa.getFullYear(), pascoa.getMonth(), pascoa.getDate() - 48) },
        { nome: "Carnaval", data: new Date(pascoa.getFullYear(), pascoa.getMonth(), pascoa.getDate() - 47) }, 
        { nome: "Sexta-feira Santa", data: new Date(pascoa.getFullYear(), pascoa.getMonth(), pascoa.getDate() - 2) }, 
        { nome: "Tiradentes", data: new Date(ano, 3, 21) },
        { nome: "Dia do Trabalho", data: new Date(ano, 4, 1) },
        { nome: "Corpus Christi", data: new Date(pascoa.getFullYear(), pascoa.getMonth(), pascoa.getDate() + 60) }, 
        { nome: "Independência do Brasil", data: ano>=1822 ? new Date(ano, 8, 7): null },
        { nome: "Nossa Senhora Aparecida", data: new Date(ano, 9, 12) },
        { nome: "Finados", data: new Date(ano, 10, 2) },
        { nome: "Proclamação da República", data: ano>= 1889 ? new Date(ano, 10, 15) : null },
        { nome: "Dia da Consciência Negra", data: ano >= 2023 ? new Date(ano, 10, 20) : null },
        { nome: "Natal", data: new Date(ano, 11, 25) }
        
    ];
    return feriados;
}

function ehFeriado(data) {
    const d = new Date(data.getFullYear(), data.getMonth(), data.getDate()); // Normaliza a data para ignorar horas, minutos e segundos
    const ano = d.getFullYear();
    const feriados = calcularFeriados(ano);
    return feriados.some(feriado => feriado.data && feriado.data.getTime() === d.getTime());
}
let inputAnoFeriados = document.querySelector("#feriados")
inputAnoFeriados.addEventListener("change", (e) => {
    let localResultadoFeriados = document.querySelector("#resultado-feriados")
    localResultadoFeriados.innerHTML = ""
    calcularFeriados(Number(e.target.value)).forEach(feriado => {
        if (feriado.data) {
            localResultadoFeriados.innerHTML += `<p>${feriado.nome}: ${feriado.data.toLocaleDateString('pt-BR')}</p>`
        }
    })
})

function contar_dias_uteis(inicio, fim) {
    if (inicio > fim) {return 0;}
    let x = 0;
    let dataInicial = new Date(inicio);
    let dataFinal = new Date(fim);
    while (dataInicial <= dataFinal) {
        let diaSemana = dataInicial.getDay();
        if (diaSemana !== 0 && diaSemana !== 6) { // 0 = Domingo, 6 = Sábado
            if (!ehFeriado(dataInicial)) {
               
                x++;
                
            }
        }
        dataInicial.setDate(dataInicial.getDate() + 1);
    } 
    return x;
}
//corrigir diferença de uma dia.

// Existe uma diferença de um dia em relacão ao que é informado no html para o javascript, por isso é necessário adicionar +1 ao dia informado no html para que o javascript conte corretamente os dias úteis.
let inputContarDiasUteis = document.querySelectorAll("#dias-uteis input")
inputContarDiasUteis.forEach(input => {
    input.addEventListener("change", () => {
        let localResultadoDiasUteis = document.querySelector("#resultado-dias-uteis")
        let inicio = document.querySelector("#dias-uteis-inicio").value
        inicio = new Date(inicio)
        inicio = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate()+1)
        let fim = document.querySelector("#dias-uteis-fim").value
        fim = new Date(fim)
        fim = new Date(fim.getFullYear(), fim.getMonth(), fim.getDate()+1)
        if (!inicio || !fim) {
            localResultadoDiasUteis.textContent = ""
            }else {   
        localResultadoDiasUteis.textContent = contar_dias_uteis(inicio, fim)
            }
    })
})
