var pacientes = (document.querySelectorAll(".paciente"));

for(var i = 0;i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
  
    var tdIMC = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        tdIMC.textContent = "Peso Inválido";
        pesoEhValido = false;
        //adiciona uma nova classe no elemento. Essa classe tem um estilo determinado no CSS:
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        tdIMC.textContent = "Altura Inválida";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdIMC.textContent = imc;
    }
}

function calculaImc (peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function validaPeso (peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura (altura){
    if (altura > 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}

