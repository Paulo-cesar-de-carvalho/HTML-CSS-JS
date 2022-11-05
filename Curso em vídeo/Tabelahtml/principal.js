let tabela = document.querySelector("#tabela3")


function cria_linha (numero){
    let linhaTabela = document.createElement("tr")
    for (let i = 1; i<5; i++){
        let celulaTabela = document.createElement("td")
        celulaTabela.innerText = numero * i
        linhaTabela.appendChild(celulaTabela)
        tabela.appendChild(linhaTabela)
    }
}

for (let a=1; a<100; a++){
    cria_linha(a)
}