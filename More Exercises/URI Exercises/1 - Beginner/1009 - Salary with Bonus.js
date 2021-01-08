const readline = require("readline");
const query = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

query.on("line", (nome) => {
    query.on("line", (salario) => {
        query.on("line", (vendas) => {
            
            let comissao = Number(vendas) * 0.15;
            total = Number(salario) + comissao;
            console.log(`TOTAL = R$ ${total.toFixed(2)}`);
            
            query.close();
        });
    });
});

//Bonus
 
