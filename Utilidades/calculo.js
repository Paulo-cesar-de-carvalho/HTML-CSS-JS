


function data_da_pascoa (ano){
    var c = (ano / 100).toFixed(0);
    var n = ano - (19 * (ano / 19).toFixed(0));
    var k = ((c - 17) / 25).toFixed(0);
    var i1 = c - (c / 4).toFixed(0) - ((c - k) / 3).toFixed(0) + (19 * n) + 15;
    var i2 = i1 - (30 * (i1 / 30).toFixed(0));
    var i3 = i2 - ((i2 / 28).toFixed(0) * (1 - (i2 / 28).toFixed(0)) * (29 / (i2 + 1)).toFixed(0) * ((21 - n) / 11).toFixed(0));
    var j1 = ano + (ano / 4).toFixed(0) + i3 + 2 - c + (c / 4).toFixed(0);
    var j2 = j1 - (7 * (j1 / 7).toFixed(0));
    var l = i3 - j2;
    var m = 3 + ((l + 40) / 44).toFixed(0);
    var d = l + 28 - (31 * (m / 4).toFixed(0));
    var m = (m/1).toFixed(0)
    var d = (d/1).toFixed(0)
    
    dataDaPascoa = c

    return dataDaPascoa
}

var ano = 2021


console.log (data_da_pascoa(ano))
