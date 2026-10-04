function listarTodosTimes(){
    const x = []
    todasPartidas.map((j)=>{
        x.push (j.time1)
    })
    return  [...new Set (x)]
}

console.log (listarTodosTimes())