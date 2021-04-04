const readline = require("readline");

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

consulta.on("line", (leitura) => {

    intermediario = leitura.split(" ")

    A = Number(intermediario[0])
    B = Number(intermediario[1])
    C = Number(intermediario[2])
    D = Number(intermediario[3])

      
        if(B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 == 0) {

        console.log("Valores aceitos");
    }

    else { console.log("Valores nao aceitos"); }

    consulta.close() 

})
