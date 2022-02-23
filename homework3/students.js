const [,,met, flag, name] = process.argv
const fs = require('fs')

let score = fs.readFileSync('./db/score.json', 'UTF-8')
let students = fs.readFileSync('./db/students.json', 'UTF-8')

score = JSON.parse(score.trim() || null) || []
students = JSON.parse(students.trim() || null) || []



if(
    students.find(el => {
        return el.name == flag})
) {
    throw new Error("This user already exist")
}else if(met.trim() == "POST" && flag.trim()){
    let newIncome = {
        id: students.length ? students.at(-1).id + 1 : 1,
        name: flag,
        date: new Date(),
        score: 0
    }
    
    students.push(newIncome)
    
    fs.writeFileSync('./db/students.json', JSON.stringify(students, null, 4))
    
    console.log('> User added successfully!')
}


if (met.trim() == "GET" && !(isNaN(+flag))) {
    let a = students.find(el => {
        return el.id == flag
    })

    let b = score.filter(el => {
        return el.userid == a.id
    })

    console.log(a.name);
    console.table(b)
    return
}

if (met.trim() == "GET") {
    let list = students.map(el => {
        return{
            id: el.id,
            name: el.name,
            score : score.reduce((acc, val) => {
                if (el.id == val.userid) {
                    return acc + val.score
                }else{
                    return 0
                }
            },0)
        }
    })
    return console.table(list)
}

if (met.trim() == "PUT" && !(isNaN(flag)) && name.trim()) {
    students.filter(el => {
        if (el.id == flag) {
            el.name = name.split("=").at(-1)
        }
    })
    fs.writeFileSync('./db/students.json', JSON.stringify(students, null, 4))
    console.log("Edit saccesfully");
    return
}


if (met.trim() == "DELETE" && !(isNaN(+flag))) {
    for (const i in students) {
        if (students[i].id == flag) {
            students.splice(i,1)
            fs.writeFileSync('./db/students.json', JSON.stringify(students, null, 4))
            console.log("Delete saccesfully");
        }
    }
    return
}