const readline = require("readline")

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (notaA) => {
    consulta.on("line", (notaB) => {
        consulta.on("line", (notaC) => {
            
notaA *= 2;
notaB *= 3;
notaC *= 5;
            
media = (notaA + notaB + notaC) / 10;
            
console.log(`MEDIA = ${media.toFixed(1)}`)

consulta.close();

        })
    })
})