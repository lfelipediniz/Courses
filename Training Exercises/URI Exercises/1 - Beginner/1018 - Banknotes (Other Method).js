const readline = require("readline")

const consulta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

consulta.on("line", (dinheiro) => {

    

cedula100 = 0
cedula50 = 0
cedula20 = 0
cedula10 = 0
cedula5 = 0
cedula2 = 0
cedula1 = 0
console.log(`${dinheiro}`)
while(dinheiro > 0){

if(dinheiro >= 100){
    dinheiro = (dinheiro - 100)
    cedula100++}

    else if(dinheiro >= 50){
        dinheiro = (dinheiro - 50)
        cedula50++}

            else if(dinheiro >= 20){
                dinheiro = (dinheiro - 20)
                cedula20++}

                else if(dinheiro >= 10){
                    dinheiro = (dinheiro - 10)
                    cedula10++}

                    else if(dinheiro >= 5){
                        dinheiro = (dinheiro - 5) 
                        cedula5++}

                        else if(dinheiro >= 2){
                            dinheiro = (dinheiro - 2) 
                            cedula2++}

                            else{
                                dinheiro = (dinheiro - 1) 
                                cedula1++}
}

console.log(`${cedula100} nota(s) de R$ 100,00
${cedula50} nota(s) de R$ 50,00
${cedula20} nota(s) de R$ 20,00
${cedula10} nota(s) de R$ 10,00
${cedula5} nota(s) de R$ 5,00
${cedula2} nota(s) de R$ 2,00
${cedula1} nota(s) de R$ 1,00`)

consulta.close()
})