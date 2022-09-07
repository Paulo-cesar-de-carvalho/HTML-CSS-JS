
var teste = {nome:"jose", sexo:"M",nascimento:"01/01/1999",peso:67.8}
console.log (teste.peso)

var pais = {nome:"Brasil",capital:"Braília",continente:"América", população:210000000, atualizar(i=1){
    this.população *= i
}}
pais.atualizar(1.2)
console.log (pais.população)
console.log (pais)