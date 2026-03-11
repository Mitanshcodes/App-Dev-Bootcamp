console.log('Test')

let score = 0
let clickValue = 1

const addButton = document.getElementById("add")

const resetButton = document.getElementById("reset")

const minusButton = document.getElementById("minus")

const scoreText = document.getElementById("score")
const upgradeButton = document.getElementById("upgrade")
const clickText = document.getElementById("click-value")

function add() {
    score += clickValue

    scoreText.innerText = "Score:" + score
}

function upgradeClick() {
    if (score >= 10) {
    clickValue += 10

    score -= 10
    

    scoreText.innerText = "Score:" + score
    clickText.innerText = "Score per Click: " + clickValue
    }
}

function minus() {
    score--

    scoreText.innerText = "Score:" + score
}

function reset() {
    score = 0
    clickValue = 1

    scoreText.innerText = "Score:" + score
    clickText.innerText = "Score per Click: " + clickValue
}


addButton.addEventListener('click', add)
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)
upgradeButton.addEventListener('click', upgradeClick)
