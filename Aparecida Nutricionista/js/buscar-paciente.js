var botaoBuscar = document.querySelector("#buscar-paciente")
botaoBuscar.addEventListener("click", function(){
    console.log("cliquei aqui");
    //XMLHttpRequest envia uma requisição a outro site.
    var xhr = new XMLHttpRequest ();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //evento "load" identifica quando a página foi carregada. responseText - obtém a resposta capturada no outri site.
    xhr.addEventListener("load", function(){
        //Verifica se os dados foram importados corretamente status 200 - não teve erro.
        if(xhr.status == 200){
            var resposta = xhr.responseText
            //transforma o formato Json em objeto do javascript
            var pacientes = JSON.parse(resposta);
        
            pacientes.forEach(function(paciente){
            adcionaPacienteTabela(paciente);
        });

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
        
    })
    xhr.send();
    
});
