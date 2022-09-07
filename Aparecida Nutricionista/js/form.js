
var botao = document.querySelector("#adicionar-paciente");
//Adiciona um evento de detecção de clicar no botão
botao.addEventListener("click",function(event){
    //previne a ação "normal" de clicar no botão
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = extraiForm (form);
    var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente)

    if(erros.length > 0 ){
        exibeErros(erros);
        return; //return vazio faz sair da função não retornando nada
    }
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    var ul = document.querySelector("#mensagem-erro");
    ul.textContent = "";


});

function adcionaPacienteTabela (paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


}


function extraiForm (form) {
//cria o objeto paciente com as propriedades: nome, peso, altura e gordura.
//posso usar a variavel que representa o formulário ponto name de cada input para extrai-los
    var paciente = {
        nome:  form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
    //Função responsável por criar a tr com sua classe e agrupar todos os td:
function montaTr (paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    var nomeTd = montaTd(paciente.nome,"info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");  
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
    }

    //função responsável por criar td com suas respectivas classes: dado = valor do input propriamente dito.
function montaTd(conteudo, classe){
    var td = document.createElement("td");
    td.textContent = conteudo;
    td.classList.add(classe);
    
    return td;
}
//Função responsável por analisar se algum intem de entrada está inválido:
function validaPaciente(paciente){
    var erros = [];
    if (paciente.nome.length == 0){
        erros.push("Nome Vazio");
    }

    if (paciente.gordura.length == 0){
        erros.push("Gordura vazia");
    }


    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }
    
    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }
    return erros
}

function exibeErros(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.textContent = "";//serve para pagar mensagens de erros pré existentes.
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro
        ul.appendChild (li);
    });
}