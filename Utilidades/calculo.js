
// tem algo de errado no cálculo da data da páscoa:

function data_da_pascoa (ano){
    let c = Math.floor(ano / 100)
    let n = ano - (19 * Math.floor(ano / 19))
    let k = Math.floor((c - 17) / 25)
    let i1 = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + (19 * n) + 15
    let i2 = i1 - (30 * Math.floor(i1 / 30))
    let i3 = i2 - (Math.floor(i2 / 28) * (1 - Math.floor(i2 / 28)) * Math.floor(29 / (i2 + 1)) * Math.floor((21 - n) / 11))
    let j1 = ano + Math.floor(ano / 4) + i3 + 2 - c + Math.floor(c / 4)
    let j2 = j1 - (7 * Math.floor(j1 / 7))
    let l = i3 - j2
    let m = 3 + Math.floor((l + 40) / 44)
    let d = l + 28 - (31 * Math.floor(m / 4))
    m = Math.floor(m / 1)
    m = m < 10 ? `0${m}` : m
    d = Math.floor(d / 1)
    d = d < 10 ? `0${d}` : d

    //let dataDaPascoa = new Date (`${ano}/${m}/${d}`) 
    let dataDaPascoa = `${d}/${m}/${ano}`

    return dataDaPascoa
}


let inputAno = document.querySelector("#data-pascoa")
inputAno.addEventListener("change", (e) =>{
    let localResutado = document.querySelector("#resultado-data-pascoa")
    localResutado.innerText = data_da_pascoa(Number(e.target.value))
}) 

