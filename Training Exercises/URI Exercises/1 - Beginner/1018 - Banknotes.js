const readline = require("readline")

const consulta = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (N) => {
    
N = Number(N)
notas = 100
totalNotas = 0
console.log(`${N}`)
while (true) {

    if (N >= notas){

        N -= notas
        totalNotas += 1
    }

    else{
        console.log(`${totalNotas} nota(s) de R$ ${notas},00`)

        if (notas == 100) notas = 50
        else if (notas == 50) notas = 20
        else if (notas == 20) notas = 10
        else if (notas == 10) notas = 5
        else if (notas == 5) notas = 2
        else if (notas == 2) notas = 1

        totalNotas = 0
        
        if (N === 0) break;

    }

}

consulta.close()
})