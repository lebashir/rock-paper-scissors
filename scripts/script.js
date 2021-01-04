let playerScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(playRound(e.target.value, computerPlay()));
    });
})

// Computer choice function
function computerPlay() {
    let roll = Math.floor(Math.random() * 3) + 1;
    if (roll === 1) {
        return "Rock";
    } else if (roll === 2) {
        return "Paper";
    } else if (roll === 3){
        return "Scissors";
    }
}
       
// player choice function
    function playRound(playerSelection, computerSelection) {
        let lowercaseP = playerSelection.toLowerCase();
        let lowercaseC = computerSelection.toLowerCase();
        let playerScore = 0;
        let computerScore = 0;
        
        if (lowercaseP == "rock" && lowercaseC == "scissors") {
            playerScore ++;

            return "You Win! Rock beats Scissors.";
        } else if (lowercaseP == "rock" && lowercaseC == "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock."
        } else if (lowercaseP == "scissors" && lowercaseC == "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper.";
        } else if (lowercaseP == "scissors" && lowercaseC == "rock") {
            computerScore++;
            return "You Lose! Rock beats Paper."
        } else if (lowercaseP == "paper" && lowercaseC == "rock") {
            playerScore++;
            return "You Win! Paper beats Rock."
        } else if (lowercaseP == "paper" && lowercaseC == "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper."
        } else if (lowercaseP === lowercaseC) {
            return "It's a tie, you both chose " + computerSelection + "!";
        }
    }
    // function game() {

    //     for (var i = 0; i < 5; i++) {
    //     var result = playRound(prompt("pick your wep"), computerPlay());
    //     console.log(result)

    //     }
    //     if (playerScore > computerScore) {
    //         return "Thanks for playing You ROCK";
    //     } else if (computerScore > playerScore) {
    //         return "Thanks for playing You SUCK";
    //     } else {
    //         return "Thanks for playing, its a tie."
    //     }
    // }