const readline = require("readline")

const consulta = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (dias) => {

anos = 0
mes = 0
dia = 0

while(dias > 0){

if(dias >= 365){
    dias = (dias - 365)
    anos++}

    else if(dias >= 30){
        dias = (dias - 30)
        mes++}

        else{
            dias = (dias - 1) 
            dia++}
}

console.log(`${anos} ano(s)
${mes} mes(es)
${dia} dia(s)`)

consulta.close()
})