//Calcula o Salário do funcionário de acordo com as horas trabalhadas.

const readline = require("readline");

const query = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout,
});

query.on("line", (numFuncionario) => {
    query.on("line", (salPorHora) => {
        query.on("line", (horaTrabalhada) => {
            
            salary = Number(salPorHora) * Number(horaTrabalhada);
            console.log(`NUMBER = ${numFuncionario}`);
            console.log(`SALARY = U$ ${salary.toFixed(2)}`);
            
            query.close();
        });
    });
});


