const readline = require("readline");
 
const query = readline.createInterface({
    
     input: process.stdin,
     output: process.stdout,
});

query.on("line", (raio) => {

    const pi = 3.14159;
    let volume = (4/3) * pi * (raio**3);
    console.log(`VOLUME = ${volume.toFixed(3)}`);
    
    query.close();
});
 
 
