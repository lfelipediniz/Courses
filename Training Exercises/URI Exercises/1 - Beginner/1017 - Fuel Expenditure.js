const readline = require("readline")

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (horas) => {
    consulta.on("line", (distancia) => {
     
        kmlitro = (horas * distancia) / 12

        console.log(`${kmlitro.toFixed(3)}`)

        consulta.close()
    })
})
