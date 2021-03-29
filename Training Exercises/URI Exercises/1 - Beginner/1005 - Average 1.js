const readline = require("readline");

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

consulta.on("line", (n1) => {
	
consulta.on("line", (n2) => {

let media = (Number(n1) * 3.5 + Number(n2) * 7.5) / 11;
        console.log("MEDIA = " + media.toFixed(5));
        
        consulta.close();
    });
});