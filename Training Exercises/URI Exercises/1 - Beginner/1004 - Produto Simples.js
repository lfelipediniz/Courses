// ESTE PROGRAMA RECEBE DOIS VALORES INTEIROS E EXIBE O PRODUTO DESTES.

const readline = require("readline")

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (num1) => {
   consulta.on("line", (num2) => {
        const res = num1 * num2
        console.log(`PROD = ${res}`)

       consulta.close()
    })
})