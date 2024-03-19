const x1btn = document.getElementById("x1")
const x2btn = document.getElementById("x2")
const x3btn = document.getElementById("x3")
const y1btn = document.getElementById("x4")
const y2btn = document.getElementById("x5")
const y3btn = document.getElementById("x6")
const z1btn = document.getElementById("x7")
const z2btn = document.getElementById("x8")
const z3btn = document.getElementById("x9")
const startButton = document.getElementById("start-btn")

gameOver = false

startButton.addEventListener("click", function(){
    newGameBoard()
    document.getElementById("winner-is").style.display = "none"
    console.log("New game started!")
//user move
    x1btn.addEventListener("click", function(){
        if(x1btn.value == ""){
            x1btn.value = "X"
            x1btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    x2btn.addEventListener("click", function(){
        if(x2btn.value == ""){
            x2btn.value = "X"
            x2btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    x3btn.addEventListener("click", function(){
        if(x3btn.value == ""){
            x3btn.value = "X"
            x3btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    y1btn.addEventListener("click", function(){
        if(y1btn.value == ""){
            y1btn.value = "X"
            y1btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
            }
    })
    y2btn.addEventListener("click", function(){
        if(y2btn.value == ""){
            y2btn.value = "X"
            y2btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    y3btn.addEventListener("click", function(){
        if(y3btn.value == ""){
            y3btn.value = "X"
            y3btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    z1btn.addEventListener("click", function(){
        if(z1btn.value == ""){
            z1btn.value = "X"
            z1btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    z2btn.addEventListener("click", function(){
        if(z2btn.value == ""){
            z2btn.value = "X"
            z2btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
    z3btn.addEventListener("click", function(){
        if(z3btn.value == ""){
            z3btn.value = "X"
            z3btn.disabled = true;
            checkWinnerX()
            checkTie()
            computerMove()
        }
    })
})
function compRand(){
    let compMove = Math.floor(Math.random() * 9) + 1
    return compMove
}
//computer move
function computerMove(){
    console.log("Computer move")
    if(x1btn.value != "" && x2btn.value != "" && x3btn.value != "" &&
        y1btn.value != "" && y2btn.value != "" && y3btn.value != "" &&
        z1btn.value != "" && z2btn.value != "" && z3btn.value != ""){
            gameOver = true
        }
    if(gameOver == false){
        let compMove = compRand()
        console.log(compMove)
        const stopInterval = setInterval(function(){
        switch(compMove){
            case 1:
                if(x1btn.value == ""){
                    x1btn.value = "O"
                    x1btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 2:
                if(x2btn.value == ""){
                    x2btn.value = "O"
                    x2btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 3:
                if(x3btn.value == ""){
                    x3btn.value = "O"
                    x3btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 4:
                if(y1btn.value == ""){
                    y1btn.value = "O"
                    y1btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 5:
                if(y2btn.value == ""){
                    y2btn.value = "O"
                    y2btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 6:
                if(y3btn.value == ""){
                    y3btn.value = "O"
                    y3btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 7:
                if(z1btn.value == ""){
                    z1btn.value = "O"
                    z1btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 8:
                if(z2btn.value == ""){
                    z2btn.value = "O"
                    z2btn.disabled = true;
                    checkWinnerO()
                    clearInterval(stopInterval)
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
            case 9:
                if(z3btn.value == ""){
                    z3btn.value = "O"
                    z3btn.disabled = true
                    checkWinnerO()
                    clearInterval(stopInterval)                    
                }else{
                    fillNext()
                    checkWinnerO()
                    clearInterval(stopInterval)
                }
                break
        }
    },1000)
    }else{
        console.log("GAME OVER!")
    }
}

function fillNext(){
    for(let i = 1; i<10;i++){
        console.log(`value for x${i}.value ${document.getElementById(`x${i}`).value}`)
        if(document.getElementById(`x${i}`).value == ""){
            document.getElementById(`x${i}`).value = "O"
            document.getElementById(`x${i}`).disabled = true
            break
        }
    }
}

function checkWinnerX(){
    if( //left to right for X
        (x1btn.value == "X" && x2btn.value == "X" && x3btn.value == "X") ||
        (y1btn.value == "X" && y2btn.value == "X" && y3btn.value == "X") ||
        (z1btn.value == "X" && z2btn.value == "X" && z3btn.value == "X") ||
        //top to down for X
        (x1btn.value == "X" && y1btn.value == "X" && z1btn.value == "X") ||
        (x2btn.value == "X" && y2btn.value == "X" && z2btn.value == "X") ||
        (x3btn.value == "X" && y3btn.value == "X" && z3btn.value == "X") ||
        //across for X
        (x1btn.value == "X" && y2btn.value == "X" && z3btn.value == "X") ||
        (x3btn.value == "X" && y2btn.value == "X" && z1btn.value == "X")
        ){
            console.log("X won!")
            gameOver = true
            document.getElementById("winner-is").style.display = "block"
            document.getElementById("win-el").textContent = "GAME OVER! You won!"
            return true
        }
}
function checkWinnerO(){
    if(//left to right for O
        (x1btn.value == "O" && x2btn.value == "O" && x3btn.value == "O") ||
        (y1btn.value == "O" && y2btn.value == "O" && y3btn.value == "O") ||
        (z1btn.value == "O" && z2btn.value == "O" && z3btn.value == "O") ||
        //top to down for O
        (x1btn.value == "O" && y1btn.value == "O" && z1btn.value == "O") ||
        (x2btn.value == "O" && y2btn.value == "O" && z2btn.value == "O") ||
        (x3btn.value == "O" && y3btn.value == "O" && z3btn.value == "O") ||
        //across for O
        (x1btn.value == "O" && y2btn.value == "O" && z3btn.value == "O") ||
        (x3btn.value == "O" && y2btn.value == "O" && z1btn.value == "O")
    ){
        console.log("O won!")
        gameOver = true
        document.getElementById("winner-is").style.display = "block"
        document.getElementById("win-el").textContent = "GAME OVER! You lost!"
    }
}

function checkTie(){
    let count = 0
    for(let i=1;i<10;i++){
        if(document.getElementById(`x${i}`).disabled == true){
            count++
            if(count == 9){
                if(!checkWinnerX()){
                    console.log("IT'S A TIE!")
                    gameOver = true
                    document.getElementById("winner-is").style.display = "block"
                    document.getElementById("win-el").textContent = "GAME OVER! It's a tie!"
                }
            }
        }        
    }
}

function newGameBoard(){
    x1btn.value = ""
    x2btn.value = ""
    x3btn.value = ""
    y1btn.value = ""
    y2btn.value = ""
    y3btn.value = ""
    z1btn.value = ""
    z2btn.value = ""
    z3btn.value = ""
    x1btn.disabled = false
    x2btn.disabled = false
    x3btn.disabled = false
    y1btn.disabled = false
    y2btn.disabled = false
    y3btn.disabled = false
    z1btn.disabled = false
    z2btn.disabled = false
    z3btn.disabled = false
    gameOver = false
    document.getElementById("winner-is").style.display = "none"
}
