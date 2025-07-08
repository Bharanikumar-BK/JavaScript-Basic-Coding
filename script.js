var inputBox = document.getElementById("inputBox")
var btn = document.getElementById("btn")
var result = document.getElementById("result")
var guessCount = document.getElementById("guessCount")
noOfGuess = 3

var randomNum = Math.floor(Math.random() * 10) + 1 //Logic for generating random numbers

if (randomNum > 5) {
    randomNum = randomNum - 5
}

btn.addEventListener("click",function(){
     if (inputBox.value == randomNum) {
        alert("Your guessed number is right")
        result.textContent = "You are right"

    } else {
        if (noOfGuess > 0) {
            noOfGuess = noOfGuess - 1
        }
        if (noOfGuess == 0) {
            alert("Your guess count is over, The random number is: " + randomNum)


        }
        guessCount.textContent = "Available guesses: " + noOfGuess
        result.textContent = "You are wrong"


    }
}) 
    
