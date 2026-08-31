

const mostrador = document.querySelector("#mostrador")
mostrador.innerText = "mostrador aqui"

const ponteiro = document.createElement('div')
ponteiro.innerText = "Ponteiro"
//ponteiro
mostrador.appendChild(ponteiro)

mostrador.addEventListener('click', (ev)=>{
    console.log( ev.target)

})