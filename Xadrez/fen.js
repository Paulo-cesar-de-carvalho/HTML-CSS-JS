//minusculas pretas

const codigoFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const pecas = [
    ['r','n','b','q','k','p','R','N','B','Q','K','P'],
    ['\u265C','\u265E','\u265D','\u265B','\u265A','\u265F','\u2656','\u2658','\u2657','\u2655','\u2654','\u2659']
]

function distribuir_pecas(fen){
    console.log(fen)
    fen = fen.substring(0,fen.indexOf(' ')).replaceAll('/','')
    console.log(fen)
    let colPecas = []
    for(let letra of fen){
        console.log(letra, letra>0 && letra<9 )
        if (letra>0 && letra <=8){
            for (let i =1;i<=letra;i++){
                colPecas.push(' ')
            }
        }else{
            colPecas.push( letra)
        }
    }
    return colPecas
}

function inserir_pecas_tabuleiro(fen, tableTabuleiro){


}
const tabelaTabuleiro = document.querySelector('#tabuleiro')

inserir_pecas_tabuleiro(codigoFen,tableTabuleiro)
console.log(distribuir_pecas(codigoFen),distribuir_pecas(codigoFen).length)