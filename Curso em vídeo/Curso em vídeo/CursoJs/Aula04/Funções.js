function verificar_par (num){ //num é o parâmetro
    if (num % 2 == 0){
        return "par" //retorno
    } else{
        return "impar" // retorno
    }
}

function somar (a=0, b=0){ //para tornar os parâmetros opcionais
    return a + b
}

console.log (somar(5,2)) //chamada

let f = function(x){ // atribuir uma função a uma variável
    return 2**x
}

let g = x => 2**x

console.log (f(10)) // chamada da variável com função de função
console.log (g(10)) 

function calcular_fatorial (num){
    var acumulado = 1
    for (i=2; i<=num;i++){
        acumulado *= i

    }
    return acumulado
}

console.log (calcular_fatorial(7))

//recursividade - a própria função executa ela mesma:
function fatorial_recursao (num){
    if (num == 1){
        return 1
    } else{
        return num * fatorial_recursao(num-1)
    }
}
console.log (fatorial_recursao(7))

