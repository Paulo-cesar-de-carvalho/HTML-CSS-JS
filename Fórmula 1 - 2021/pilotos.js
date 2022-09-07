//Montar tabela dos resultados dos pilotos (posição de chegada)
function monta_tabela_resultados(corridas){
    for(var a = 0; a < corridas.length; a++){
        var nova_tr = document.createElement("tr");
        for (var i = 0; i < 12; i++){
            var td = document.createElement("td");
            td.textContent = corridas[a][i];
            td.classList.add("chegada");
            nova_tr.appendChild(td);
        }
        tabela.appendChild(nova_tr);
    }
}


function calcula_dados_classificacao_por_corrida (corridas,pilotos){
    var aux = 0;
    
    var classificacao = [pilotos]
    for (var a = 0; a < corridas.length ; a++){
        var pontuacao = [];
        for (var p = 0; p < pilotos.length; p++){
                         
            for (var i = 0; i < 15; i++){
                if (corridas[a][i]==pilotos[p]){
                    aux = pontos[i] + aux;
                }
            }        
            pontuacao.push(aux);
            aux = 0;
        }
        classificacao.push (pontuacao)
    }
    //montar dados acumulados
    for (a = 1; a < corridas.length ;a++){
        var auxiliar = [];
        for (i = 0; i < pilotos.length; i++){
            auxiliar.push (classificacao[a][i]+classificacao[a+1][i]);        
        }
    classificacao[a+1] = auxiliar;
    }    
    return classificacao;
}


//Cria uma caixa de seleção com todos os pilotos (um select embutido em um td):
function cria_caixa_selecao (td,pilotos,select){
    td.classList.add("posicao-simulada")
    for (var p = -1; p < pilotos.length; p++){
        var option_simulador = document.createElement("option")
        option_simulador.textContent = pilotos[p]
        select.appendChild(option_simulador)
        td.appendChild(select)
    }
}

//Cria uma linha (tr) com 11 selects, fornecendo a tr e tabela do html e pilotos.
function cria_tr_com_seleçoes (tr,tabela,pilotos){
    for(var a = 0; a < 12; a++ ){
        var td_simulador = document.createElement("td");       
        var select_simulador = document.createElement("select");
        select_simulador.classList.add("selecionado");
        select_simulador.id = "qual";
        if( a == 0){
            td_simulador.textContent = ""; 
        }else{
            cria_caixa_selecao(td_simulador,pilotos,select_simulador);                  
        }
        tr.appendChild(td_simulador)    
    }
    tabela.appendChild(tr)
}

//Monta a tabela de classificação:
function monta_classificação (pilotos, classificacao, base){
    for(var a = 0; a < pilotos.length; a++){
        var nova_tr = document.createElement("tr")
        for (var i = 0; i < corridas.length + 1; i++){
            var td = document.createElement("td");
            td.textContent = classificacao[i][a];
            td.classList.add("chegada")
            nova_tr.appendChild(td);
        }
        base.appendChild(nova_tr)
    }
}


var tabela = document.querySelector("#tabela")
//criar uma forma de importar arquivo csv 
// classificar tabela em ordem decrescente de pontuação  
var pontos = [ 0 , 25, 18 , 15, 12 , 10, 8 , 6 , 4 , 2 , 1 , 1, 3, 2, 1]

//BAnco de dados dos pilotos e chegadas nas corridas:
var pilotos = ["VER","HAM","PER","NOR","BOT","LEC","SAI","GAS","RIC","VET","ALO","OCO","STR","TSU","RAI","GIO","RUS","MSC","MAZ","LAT"]
var Bahrain = ["Bahrain","HAM","VER","BOT","NOR","PER","LEC","RIC","SAI","TSU","STR","BOT"]
var Emilia_Romagna = ["Emilia Romagna","VER","HAM","NOR","LEC","SAI","RIC","GAS","STR","OCO","ALO","HAM"]
var Portugal = ["Portugal","HAM","VER","BOT","PER","NOR","LEC","OCO","ALO","RIC","GAS","BOT"]
var Spain = ["Spain","HAM","VER","BOT","LEC","PER","RIC","SAI","NOR","OCO","GAS","VER"]
var Monaco = ["Monaco","VER","SAI","NOR","PER","VET","GAS","HAM","STR","OCO","GIO","HAM"]
var Azerbaijan = ["Azerbaijan","PER","VET","GAS","LEC","NOR","ALO","TSU","SAI","RIC","RAI","-"]
var France = ["France","VER","HAM","PER","BOT","NOR","RIC","GAS","ALO","VET","STR","VER"]
var Estiria = ["Estiria","VER","HAM","BOT","PER","NOR","SAI","LEC","STR","ALO","TSU","HAM"]
var Austria = ["Austria","VER","BOT","NOR","HAM","SAI","PER","RIC","LEC","GAS","ALO","VER"]
var England = ["Inglaterra","HAM","LEC","BOT","NOR","RIC","SAI","STR","ALO","OCO","TSU","-","VER","HAM","BOT"] 
var Hungary = ["Hungria", "OCO", "HAM","SAI","ALO","GAS","TSU", "LAT","RUS","VER", "RAI", "GAS"]
var Belgian = ["Bélgica", "VER", "RUS","HAM","RIC","VET", "GAS", "OCO","LEC","LAT","SAI","-"]
var Netherlands = ["Holanda", "VER", "HAM","BOT","GAS", "LEC", "ALO","SAI","PER", "OCO","NOR","HAM"]
var Italy = ["Itália","RIC","NOR","BOT","LEC","PER","SAI","STO","ALO","RUS","OCO","RIC","BOT","RIC","NOR"]
var corridas = [Bahrain, Emilia_Romagna,Portugal,Spain,Monaco,Azerbaijan,France,Estiria,Austria,England, Hungary,Belgian,Netherlands,Italy]
        
monta_tabela_resultados (corridas)

//cria tabela de simulação
for(i = 0; i < 11-corridas.length ;i++){
    var tr_simulador = document.createElement("tr");
    cria_tr_com_seleçoes(tr_simulador, tabela, pilotos);    
}

var classificacao = calcula_dados_classificacao_por_corrida(corridas, pilotos)

console.log(classificacao)

var classific = document.querySelector("#classificacao");
var classific_titulo = document.querySelector(".cabecalho-classificacao");

function cria_titulo_classifcação (corridas){
    for (var i = 0; i < corridas.length; i++){
        var th_classificacao = document.createElement("th")
        th_classificacao.textContent = corridas[i][0]
        classific_titulo.appendChild(th_classificacao)
    }
    
}
cria_titulo_classifcação(corridas)

monta_classificação(pilotos,classificacao, classific);

var selecionado = document.querySelectorAll(".selecionado")
var gp_realizados = corridas.length

tabela.addEventListener("change", function() {
    classific.innerHTML = ""
    
    var simulado_1 = ["gp"];
    var nova_corrida = corridas;
    nova_corrida.splice(gp_realizados,1);
    
    for (var i = 0; i < 11; i++){
        var index = selecionado[i].selectedIndex;
        var piloto_selecionado = pilotos[index-1];
        simulado_1.push(piloto_selecionado);                 
    }
    nova_corrida = corridas
    nova_corrida.push(simulado_1);
    
    console.log(nova_corrida);
    var classificacao = calcula_dados_classificacao_por_corrida(nova_corrida, pilotos);
    var simul = document.querySelector("#classificacao");
    
    monta_classificação( pilotos , classificacao , simul);
 
});

//coloca em evidência o piloto selecionado, incluindo a classe evidência.
var destaque = document.querySelectorAll(".chegada");
for (var i = 0; i < corridas.length * 12; i++){
    destaque[i].addEventListener("mouseover", function(){
        var evidente = this.textContent;
        for(var a = 0; a < corridas.length * 12 ; a++){
            if(destaque[a].textContent == evidente){
                destaque[a].classList.add("evidencia");
            }
        }
    });
}

//apaga a evidência do piloto selecionado, excluindo a classe evidência.
for (var i = 0; i < corridas.length * 12 ; i++){
    destaque[i].addEventListener("mouseout", function(){           
        for(var a = 0; a < corridas.length * 12 ; a++){
            destaque[a].classList.remove("evidencia");
        }
        this.classList.remove("evidencia");        
    });
}

