function capturarCEP (cep){
    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
    ajax.send();
    ajax.onload = function(){
        let resposta = (this.responseText)
        resposta = JSON.parse(resposta)
        document.querySelector("#resposta").innerHTML = ` Logradouro: ${resposta.logradouro}<br> Bairro: ${resposta.bairro}<br>
             Localidade: ${resposta.localidade} <br>Estado: ${resposta.uf} `        
    }
}

let btnConsultar = document.querySelector("#btn-consultar")
btnConsultar.addEventListener("click",()=>{
    let cepDigitado = document.querySelector("#cep").value 
    cepDigitado =  cepDigitado.replace('-','')
    capturarCEP(cepDigitado)    
})

capturarCEP(37550052)
