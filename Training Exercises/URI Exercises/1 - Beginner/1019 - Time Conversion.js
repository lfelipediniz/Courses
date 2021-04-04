const readline = require("readline")

const consulta = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (N) => {

horas = 0
minutos = 0
segundos = 0

while(N > 0){

if(N >= 3600){
    N = (N - 3600)
    horas++}

    else if(N >= 60){
        N = (N - 60)
        minutos++}

        else{
            N = (N - 1) 
            segundos++}
}

console.log(`${horas}:${minutos}:${segundos}`)

consulta.close()
})