const readline = require("readline");

const consulta = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout,
});

consulta.on("line", (leitura) => {

    intermediario = leitura.split(" ")

    a = Number(intermediario[0])
    b = Number(intermediario[1])
    c = Number(intermediario[1])

    maior =  Math.max(...intermediario)
 
    console.log(`${maior} eh o maior`)
    
    consulta.close()

})
