    

//Adiciona um evento de duplo click na tabela inteira:
var tabela = document.querySelector("table")
//Faz a ação recair ao elemenmto que realmente foi clicado: (target = alvo)
//O alvo do click é o td. Para se excluido a tr, é preciso que o envento atinja seu "pai", função parentNode
tabela.addEventListener("dblclick",function(event){
   //adiciona uma classe que faz o elemento ir diminuindo a opacidade lentamente até desaparecer
    event.target.parentNode.classList.add("excluindo");
    //A função Settimout faz o javaScript esperar por um tempo em milissegundos antes de realizar:
    setTimeout(function(){
        event.target.parentNode.remove();
    },1200);
    
});