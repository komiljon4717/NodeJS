const { table } = require('console')
const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


income()
function income() {
    rl.question("Qanday pulligini kiriting: ", (enterWord) =>{
        let money = enterWord.split(' ')
        money = +money[money.length - 1]
        fs.appendFileSync('./kirim.txt', "+"+money)
        console.log("Daromad qo'shildi!");
        return rl.close()
    })
}