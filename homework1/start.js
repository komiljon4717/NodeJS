const { table } = require('console')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


let savols = [
    {
        sav: "Eng uzun daryo qaysi?\nA: Amazonka \nB: Nil\nC: Sirdaryo\nD: Amudaryo\n",
        jav: "B" 
    },
    {
        sav: "O'zbekiston poytaxti qayer?\nA: Andijon \nB: Toshkent\nC: Washington\nD: Samarqand\n",
        jav: "B" 
    },
    {
        sav: "Bir tiyinga qimmat kompaniya?\nA: GM \nB: Ford\nC: Ferrari\nD: KIA\n",
        jav: "A" 
    },
    {
        sav: "Alisher Navoiy qachon tug'ilgan?\nA: 1501-yil \nB: 1503-yil\nC: 1442-yil\nD: 1441-yil\n",
        jav: "D" 
    },
    {
        sav: "4 yilda bir keladigan yil?\nA: Bilmayman \nB: Eshitmaganman\nC: Kabisa\nD: Boloradi\n",
        jav: "C" 
    },
    {
        sav: "Eng kichik davlat?\nA: O'zbekiston \nB: Osiyo\nC: Vatikan\nD: Ummon\n",
        jav: "C" 
    },
    {
        sav: "Mashinada nechta balon bor?\nA: 4 ta\nB: 3 ta\nC: 6 ta\nD: 5 ta\n",
        jav: "D" 
    },
    {
        sav: "Eng baland cho'qqi?\nA: Jomolungma \nB: Hisor\nC: Burgut\nD: Telebashka\n",
        jav: "A" 
    },
    {
        sav: "Eng baland sharshara?\nA: Niagara\nB: Anxel\nC: Meksika\nD: toronto\n",
        jav: "A" 
    },
    {
        sav: "Suyuq metall?\nA: Qalay \nB: Rux\nC: Oltin\nD: Simob\n",
        jav: "D" 
    },
]


shuffle(savols)

let results = []

let i  = 0
test(savols[i])

function test(savol) {
    rl.question(i + 1 + ". " +savol.sav + "Javobni kiriting: ", (javob) =>{
        if (!(javob.length) || javob.length > 1) return test(savols[i])

        results.push(javob.toLocaleLowerCase())
        i++
        if (i >= savols.length) {
            let obj = { 
                savollar_soni: savols.length, 
                togri_javoblar: 0, 
                xato_javoblar: 0
            }
            for (let i = 0; i < savols.length; i++) {
                if (savols[i].jav.toLocaleLowerCase() == results[i]) {
                    obj.togri_javoblar += 1
                }
            }
            obj.xato_javoblar = savols.length - obj.togri_javoblar
            console.table(obj)
            return rl.close()
        }
        return test(savols[i])
    })
}