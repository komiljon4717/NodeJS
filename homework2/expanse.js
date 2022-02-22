const { table } = require('console')
const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


expanse()
function expanse() {
    rl.question("Harajatni kiriting: ", (enterWord) =>{
        let money = enterWord.split(' ')
        money = +money[money.length - 1]
        fs.appendFileSync('./chiqim.txt', "+"+money)
        console.log("Xarajat qo'shildi!");
        return rl.close()
    })
}