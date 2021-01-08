const readline = require("readline")

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (x) => {
    consulta.on("line", (y) => {
        medio = x / y
        console.log(`${medio.toFixed(3)} km/l`)

        consulta.close()
    })
})