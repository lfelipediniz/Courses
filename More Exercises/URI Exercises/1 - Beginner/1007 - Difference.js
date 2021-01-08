const readline = require("readline");

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

consulta.on("line", (A) => {
        consulta.on("line", (B) => {
            consulta.on("line", (C) => {
                consulta.on("line", (D) => {
                
                diferenca = A*B - C*D
                
                console.log(`DIFERENCA = ${diferenca}`)
                
                consulta.close()
            }) 
        })
    })
})