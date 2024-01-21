let database = require('./questions')
let leaderBoard = require('./leaders')
const readlineSync = require('readline-sync');
const kuler = require('kuler')

const questions = database
var score = 0

let userName = readlineSync.question("What's your name : ")
console.log(kuler(`Hello ${userName}, Welcome to Quizify!`, '#dc2626'))

var validateAnswer = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer){
        console.log(kuler(`You are correct \n`, '#84cc16'))
        score += 1
    }else{
        console.log(kuler(`Oops! you are wrong`, '#991b1b'))
        console.log(kuler(`Correct Answer is : ${correctAnswer}\n`, '#c026d3'))
    }
}

var showQuestionsAndOptions = () => {
    console.log("\n")
    questions.data.forEach((q, index) => {
        console.log(`Q${index+1} : ${q.question} \n`)
        Object.keys(q.options).forEach(optionKey => {
            console.log(`${optionKey} : ${q.options[optionKey]}`)
        })
        console.log('\n')
        let userAnswer = readlineSync.question(`Enter you answer : (a/b/c/d) : `)
        validateAnswer(userAnswer, q.correctAnswer)
    })
    console.log(kuler(`Your total score is : ${score}`, '#facc15'))

}

var highScorer = () => {
    leaderBoard.data.push({name : userName, score : score})
    let sortedData = leaderBoard.data.sort((a, b) => b.score - a.score)
    console.log(kuler("\n🏆 Check your position on the leaderBoard 🏆", '#2563eb'))
    sortedData.forEach((leader) => {
        console.log(kuler(`${leader.name} : ${leader.score}`, '#6d28d9'))
    })
}

showQuestionsAndOptions()
highScorer()

