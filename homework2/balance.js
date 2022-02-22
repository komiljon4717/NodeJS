const { table } = require('console')
const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

balance()
function balance() {
    rl.question("Enter key: ", (enterWord) =>{
        if (enterWord) {
            let kirim = eval(fs.readFileSync('./kirim.txt', "UTF-8"))
            let chiqim = eval(fs.readFileSync('./chiqim.txt', "UTF-8"))
            console.table({
                income: kirim,
                expanse: chiqim,
                balance: Math.abs(kirim - chiqim)
            })
            return rl.close();
        }else{
            let kirim = eval(fs.readFileSync('./kirim.txt', "UTF-8"))
            let chiqim = eval(fs.readFileSync('./chiqim.txt', "UTF-8"))
            console.log("Total balance: $" + Math.abs(chiqim - kirim));
            return rl.close();
        }

    })
}