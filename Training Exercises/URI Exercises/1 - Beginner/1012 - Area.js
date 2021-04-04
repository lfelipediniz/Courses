const readline = require("readline");

const consulta = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout,
});

consulta.on("line", (leitura) => {

    intermediario = leitura.split(" ")

    a = Number(intermediario[0])
    b = Number(intermediario[1])
    c = Number(intermediario[2])

        triangulo = ((a * c)/2)
        circulo = ((c * c)* 3.14159)
        trapezio = (((a + b)*c)/2)
        quadrado = (b * b)
        retangulo = (a * b)

                console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
                console.log(`CIRCULO: ${circulo.toFixed(3)}`)
                console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
                console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
                console.log(`RETANGULO: ${retangulo.toFixed(3)}`)

                

                consulta.close()
            }) 
