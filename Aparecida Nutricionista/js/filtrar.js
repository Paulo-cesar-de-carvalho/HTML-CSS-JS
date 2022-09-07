var campoFiltro = document.querySelector("#filtrar-tabela")

//Adiciona um evento de detecção de inclusão de dados "input":
campoFiltro.addEventListener("input",function(){
    //Seleciona todos elementos da classe paciente:
    var pacientes = document.querySelectorAll(".paciente");
    //Determina se tem algo digitado no campo filtar
    if (this.value.length > 0){
        for(var i = 0; i< pacientes.length; i++){
            var paciente = pacientes[i];
            //Busca apenas os elementos da classe info-nome dentro da classe paciente (localiza os tds dentro das tr):
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            //Define uma expressão regular digita no campoFiltro (this). O "i" representa Case insenstive (não diferencia maiúsculas)
            var expressao = new RegExp(this.value, "i")
            //test testa se dentro da expressão procurada existe a expressão regular digitada
            if(!expressao.test(nome)){
                //inclui a classe invisível para aqueles não encontrados na pesquisa (display:none)
                paciente.classList.add("invisivel");
            }else{
                //remove a classe invisivel e faz aparcer o item
                paciente.classList.remove("invisivel")
            }
        }    
        //Se o campo filtrar estiver vazio, remove a classe invisível de todos os intens:
    }else{
        for (var i =0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
    
    
    
});




//parei aqui... Implementando a lógica