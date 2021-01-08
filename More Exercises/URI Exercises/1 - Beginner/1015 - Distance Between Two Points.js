const readline = require("readline");

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

consulta.on("line", (leitura) => {
consulta.on("line", (leitura2) => {

    intermediario = leitura.split(" ")

    x1 = Number(intermediario[0])
    y1 = Number(intermediario[1])

    
    intermediario2 = leitura2.split(" ")
    
    x2 = Number(intermediario2[0])
    y2 = Number(intermediario2[1])

    x = (Math.pow(x2, 2) - 2 * x2 * x1 + Math.pow(x1, 2))
    y = (Math.pow(y2, 2) - 2 * y2 * y1 + Math.pow(y1, 2))

    distancia = Math.sqrt(x + y)
    
    console.log(`${distancia.toFixed(4)}`)
    
    consulta.close()

}) }) 
