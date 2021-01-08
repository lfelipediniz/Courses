const readline = require("readline");

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

consulta.on("line", (n1) => {
    consulta.on("line", (n2) => {
        let soma = Number(n1) + Number(n2)
        console.log("SOMA = " + soma)
        
        consulta.close()
    });
});