let score = 0
let coins = Number(localStorage.getItem("coins")) || 0
let lives = 3
let level = Number(localStorage.getItem("level")) || 1

document.getElementById("coins").textContent = coins
document.getElementById("level").textContent = level
document.getElementById("lives").textContent = lives

function startGame(){

document.getElementById("menu").style.display="none"

}

function addCoins(amount){

coins += amount
localStorage.setItem("coins",coins)
document.getElementById("coins").textContent = coins

}

function loseLife(){

lives--

document.getElementById("lives").textContent = lives

if(lives<=0){

document.getElementById("continueScreen").classList.remove("hidden")

}

}

function continueLevel(){

if(coins >= 50){

coins -= 50
lives = 1

localStorage.setItem("coins",coins)

document.getElementById("coins").textContent = coins
document.getElementById("lives").textContent = lives

document.getElementById("continueScreen").classList.add("hidden")

}else{

alert("Not enough coins")

}

}

function restartLevel(){

lives = 3

document.getElementById("lives").textContent = lives

document.getElementById("continueScreen").classList.add("hidden")

}

function nextLevel(){

level++

localStorage.setItem("level",level)

document.getElementById("level").textContent = level

addCoins(25)

}

function resetProgress(){

localStorage.clear()

location.reload()

}