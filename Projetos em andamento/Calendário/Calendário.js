    
    var inputAno = document.getElementById("ano")
    inputAno.value = 2024
    var btnAnterior = document.querySelector("#anterior")
    var btnProximo = document.querySelector("#proximo")
    
    btnAnterior.addEventListener("click",function(){
        dataRef = new Date (Number(dataRef) - 30*24*60*60*1000)
        criar_dias(dataRef)
    })
    //alterar a forma de localizar o antes e o depois



    var area = document.getElementById("area-calendario")
    var largura = area.width
    //descobrir a largura para definir a altura automática.
    area.style.height = "750px"
    var tabela = document.getElementById("dia-do-mes")
    
    let iDia = 0
    var dataRef = new Date
    var primeiroDia = Number(calcular_primeiro_dia(dataRef))
    var diasSemana = ["dom","seg","ter","qua","qui","sex","sab"]
    var meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

    function criar_dias(dataRef){
        tabela.innerHTML = ""
        var nomeMes = document.getElementsByClassName("mes-ano")[0]
        var mes = meses[dataRef.getMonth()].toUpperCase()
        var ano = dataRef.getFullYear()
        nomeMes.innerHTML = `${mes} ${ano}`

        var trLinha = document.createElement("tr")
        for (let col = 1; col <= 7;col++){
            let thTitulo = document.createElement("th")
            thTitulo.innerHTML = diasSemana[col-1]
            trLinha.appendChild(thTitulo)
        }
        tabela.appendChild (trLinha)
        
        for(let linha = 1;linha <=7;linha++ ){
            var trLinha = document.createElement("tr")
            for (let col=1 ; col<=7; col++){
                dia = new Date (primeiroDia + iDia * 24*60*60*1000)
                let tdDia = document.createElement("td")
                tdDia.innerHTML = dia.getDate()
                tdDia.setAttribute("class", "cada-dia-mes")
                tdDia.setAttribute("id", `posição ${linha}-${col}`)
                if (col == 1){
                    tdDia.setAttribute("class", "domingo")
                }
                var hoje = new Date
                if (hoje.getDate() == dia.getDate() && hoje.getMonth() == dia.getMonth() && hoje.getFullYear() == dia.getFullYear()){
                    tdDia.setAttribute("class", "hoje")

                }
                if (dataRef.getMonth() != dia.getMonth()){
                    tdDia.setAttribute("class", "invisivel")
                    tdDia.innerHTML = ""
                }
                trLinha.appendChild(tdDia)
                iDia ++
            }
            tabela.appendChild(trLinha)
        }
    }
    
    
    function calcular_primeiro_dia(dataRef){
        var mesRef = dataRef.getMonth()
        var anoRef = dataRef.getFullYear()
        var primeiroDiaMes = new Date(anoRef,mesRef,1)
        var diaSemana = primeiroDiaMes.getDay()
        var primeiroDia = new Date (Number(primeiroDiaMes)- diaSemana * 24 * 60 * 60 * 1000)
        return primeiroDia

    }
    //parei criando feriados:
    function retornar_feriados (dataRef){
        var original = [[1,1],[21,4],[1,5],[7,9],[12,10],[2,11],[15,11],[25,12]]
        var feriados = []
        for (var i in original){
            feriados.push (new Date(dataRef.getFullYear(),Number(original[i][1])-1,Number(original[i][0])))
            console.log (original[i][1])

        }
        return feriados
    }
    
console.log(retornar_feriados(new Date))
