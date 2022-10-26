
// tem algo de errado no cálculo da data da páscoa:

function data_da_pascoa (ano){
    let c = (ano / 100).toFixed(0);
    let n = ano - (19 * (ano / 19).toFixed(0));
    let k = ((c - 17) / 25).toFixed(0);
    let i1 = c - (c / 4).toFixed(0) - ((c - k) / 3).toFixed(0) + (19 * n) + 15;
    let i2 = i1 - (30 * (i1 / 30).toFixed(0));
    let i3 = i2 - ((i2 / 28).toFixed(0) * (1 - (i2 / 28).toFixed(0)) * (29 / (i2 + 1)).toFixed(0) * ((21 - n) / 11).toFixed(0));
    let j1 = ano + (ano / 4).toFixed(0) + i3 + 2 - c + (c / 4).toFixed(0);
    let j2 = j1 - (7 * (j1 / 7).toFixed(0));
    let l = i3 - j2;
    let m = 3 + ((l + 40) / 44).toFixed(0);
    let d = l + 28 - (31 * (m / 4).toFixed(0));
    m = (m/1).toFixed(0)
    d = (d/1).toFixed(0)
    
    //let dataDaPascoa = new Date (`${ano}/${m}/${d}`) 
    let dataDaPascoa = ano + "-" + m + "-" + d

    return dataDaPascoa
}

let ano = 2021

let inputAno = document.querySelector("#data-pascoa")
inputAno.addEventListener("change", function(){
    console.log("teste")
    let localResutado = document.querySelector("#resultado-data-pascoa")
    localResutado.innerText = data_da_pascoa(this.value)
})


console.log (data_da_pascoa(ano))
