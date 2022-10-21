
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
btnConsultar.addEventListener("click",function(){
    let cepDigitado = document.querySelector("#cep").value 
    cepDigitado =  cepDigitado.replace("-","")
    capturarCEP(cepDigitado)
    
})



capturarCEP(37550052)


//let capturaJson = JSON.parse()

// let objetoTeste = [{
//     cep: "37550-052",
//     logradouro: "Rua Tupinambás",
//     complemento: " ",
//     bairro: "Centro",
//     localidade: "Pouso Alegre",
//     uf: "MG",
//     ibge: "3152501",
//     gia: " ",
//     ddd: "35",
//     siafi: "5049"
//   },
//   {
//     cep: "37550-000",
//     logradouro: "generico",
//     complemento: " ",
//     bairro: "Centro",
//     localidade: "Pouso Alegre",
//     uf: "MG",
//     ibge: "3152501",
//     gia: " ",
//     ddd: "35",
//     siafi: "5049"
//   } ]


// let objetoJson = JSON.stringify(objetoTeste)

// console.log (objetoJson)
// console.log (objetoTeste[0].logradouro)