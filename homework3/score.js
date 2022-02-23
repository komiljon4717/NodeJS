const [,,met, studentid, scor, comment] = process.argv
const fs = require('fs')
// console.log(met, studentid, scor, comment);

let score = fs.readFileSync('./db/score.json', 'UTF-8')
let students = fs.readFileSync('./db/students.json', 'UTF-8')

score = JSON.parse(score.trim() || null) || []
students = JSON.parse(students.trim() || null) || []

if (met.trim() == "POST" && !(isNaN(+studentid)) && scor.trim() && comment.trim()) {
    let newScore = {
        id: score.length ? score.at(-1).id + 1 : 1,
        userid: +studentid,
        date: new Date(),
        score: +scor.split("=").at(-1),
        comment: comment
    }

    
    // console.log(newScore);
    score.push(newScore)
    
    fs.writeFileSync('./db/score.json', JSON.stringify(score, null, 4))
    
    console.log('> Score added successfully!')
    return
}

if (met.trim() == "PUT" && studentid && scor.trim()) {
    score.filter(el => {
        if (el.id == studentid) {
            el.score = scor.split("=").at(-1)
        }
    })
    // console.log(score);
    fs.writeFileSync('./db/score.json', JSON.stringify(score, null, 4))
    console.log("Score edit saccesfully");
}

if (met.trim() == "DELETE" && !(isNaN(+studentid))) {
    for (const i in score) {
        if (score[i].id == studentid) {
            console.log("a");
            score.splice(i,1)
            fs.writeFileSync('./db/score.json', JSON.stringify(score, null, 4))
            console.log("Delete saccesfully");
        }
    }
    return
}

