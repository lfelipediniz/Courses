const readline = require("readline");

const query = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

query.on("line", (leitura) => {

    intermediary = leitura.split(" ")

    A = Number(intermediary[0])
    B = Number(intermediary[1])
    C = Number(intermediary[2])
    D = Number(intermediary[3])

      
        if(B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 == 0) {

        console.log("Valores aceitos");
    }

    else { console.log("Valores nao aceitos"); }

    query.close() 

})
