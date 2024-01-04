let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper" , "scissor"];
    var randomIdx = Math.floor((Math.random()*3));
    return options[randomIdx];
}

const drawgame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw,Play Again!!";
    msg.style.backgroundColor = "#0F1035";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#65B741";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose:( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#DF2E38";
    }
}

const playgame = (userChoice) => {
    console.log("user choice:", userChoice);//userchoice
    //generate computer choice 
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);
    //decide score
    if(userChoice === compChoice){
        drawgame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin= compChoice === "paper" ? false : true;
        }

        if(userChoice === "paper"){
            //rock, scissor
            userWin= compChoice === "scissor" ? false : true;
        }

        if(userChoice === "scissor"){
            //paper, scissor
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

//Get Choice of user
choices.forEach((choice)=>{//iterate through each choice
    console.log(choice);
    choice.addEventListener("click",()=>{//checking for onclick event on each click
        var userChoice = choice.getAttribute('id');
        playgame(userChoice);
    })
});