
let inputAnoPascoa = document.querySelector("#data-pascoa")
inputAnoPascoa.addEventListener("change", (e) =>{
    let localResutado = document.querySelector("#resultado-data-pascoa")
    localResutado.innerText = data_da_pascoa(Number(e.target.value)).toLocaleDateString('pt-BR', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
}) 


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
