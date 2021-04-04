const readline = require("readline");
const query = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

query.on("line", (product1) => {
    query.on("line", (product2) => {
        
        product1 = product1.split(" ");
        product2 = product2.split(" ")
        let total1 = Number(product1[1]) * Number(product1[2]);
        let total2 = Number(product2[1]) * Number(product2[2]);
        valor = total1 + total2;
        console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);
        
        query.close();
    });
});
