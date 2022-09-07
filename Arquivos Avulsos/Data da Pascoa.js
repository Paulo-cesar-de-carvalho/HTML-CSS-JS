from datetime import date

def Data_da_Pascoa (ano):
    c = (ano // 100)
    n = ano - (19 * (ano // 19))
    k = (c - 17) // 25
    i1 = c - c // 4 - (c - k) // 3 + (19 * n) + 15
    i2 = i1 - (30 * (i1 // 30))
    i3 = i2 - ((i2 // 28) * (1 - (i2 // 28)) * (29 / (i2 + 1)) * ((21 - n) // 11))
    j1 = ano + ano // 4 + i3 + 2 - c + c // 4
    j2 = j1 - (7 * (j1 // 7))
    l = i3 - j2
    m = 3 + ((l + 40) // 44)
    d = l + 28 - (31 * (m // 4))
    m = int(m)
    d = int(d)
    
    dataDaPascoa = date(ano, m, d).strftime("%d/%m/%Y")

    return dataDaPascoa

ano = 2021


print (Data_da_Pascoa(ano))
