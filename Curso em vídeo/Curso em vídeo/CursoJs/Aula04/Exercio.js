var x = 1
while (x < 6){
    console.log (`número ${x}`)
    x++
}

do {
    console.log (`passo ${x}`)
    x++
} while(x < 6)

console.log ("fim")

for(var c=1 ; c<6 ; c++) {
   console.log (`contagem${c}`)
}

var a = ["primeiro","segunda","terceiro"]
console.log (a[0])
console.log (a[1])

var b = [5,8,4, 1, 7]
b[6] = 2 // inclui um elemento numa posição específica do array
b.push(10) // variavel.push(elemento) : inclui um elemento na última posição do array
b[5] = "sim"
//console.log(b.sort())  // b.sort() com parênteses - ordena os elementos em ordem crescente 
console.log(b)
console.log(b.length)

for (var i = 0;i<b.length;i++){
    console.log (`A posição ${i} tem o valor ${b[i]}`)
}

for (var i in b){
    console.log (b[i])
}
// variavel.indexOf retorna a posição do elemento procurado.
console.log(b.indexOf(3)) // Valor inexistente retorna -1
var c = [a, b]
console.log(c)
console.log (c[1][1])