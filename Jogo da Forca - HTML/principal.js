var palavraSecreta = "otorrinolaringologistassss".toUpperCase();
var numeroLetras = palavraSecreta.length

for(var aux = 0; aux < palavraSecreta.length; aux++){
    
    cria_letra (palavraSecreta[aux],"letra1")

} 
    




function cria_letra(let,classe){
    //var lista = document.createElement("div");
    var letra = document.createElement("span");
    //lista.appendChild(letra);
    letra.classList.add(classe)
    var painel = document.querySelector(".painel");
    painel.appendChild(letra);
    letra.textContent = let  
}    

