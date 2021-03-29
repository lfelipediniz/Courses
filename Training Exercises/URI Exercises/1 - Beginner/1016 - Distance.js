const readline = require("readline")

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (distancia) => {
    
        y = distancia * 2

        console.log(`${y} minutos`)

        consulta.close()
    })
