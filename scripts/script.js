
let playerScore = 0;
let computerScore = 0;

let enemy = document.querySelector('#computerScore');
let player = document.querySelector('#playerScore')

const result = document.querySelector('.result')

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(playRound(e.target.value, computerPlay()));
    });
})
function checkWinner() {
    if (playerScore == 3) {
        result.innerHTML="<span>YOU WIN YOU ARE AWESOME</span>";   
    } else if (computerScore ==3){
        return result.innerHTML="<span>PC OVERLORD WINS</span>"; 
    }
}
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
       
    // play Round and Update score;
    function playRound(playerSelection, computerSelection) {
        let lowercaseP = playerSelection.toLowerCase();
        let lowercaseC = computerSelection.toLowerCase();
         
            if (lowercaseP == "rock" && lowercaseC == "scissors") {

                playerScore= ++playerScore;
                player.innerText= playerScore

                result.innerHTML="<span>You Win! Rock beats Scissors.</span>";
                
            } else if (lowercaseP == "rock" && lowercaseC == "paper") {

                computerScore= ++computerScore;
                enemy.innerText = computerScore;

                result.innerHTML="<span>You Lose! Paper beats Rock.</span>" 

            } else if (lowercaseP == "scissors" && lowercaseC == "paper") {

                playerScore= ++playerScore;
                player.innerText = playerScore;

                result.innerHTML="<span>You Win! Scissors beats Paper.</span>";

            } else if (lowercaseP == "scissors" && lowercaseC == "rock") {

                computerScore= ++computerScore;
                enemy.innerText = computerScore;

                result.innerHTML="<span>You Lose! Rock beats Paper.</span>";

            } else if (lowercaseP == "paper" && lowercaseC == "rock") {

                playerScore= ++playerScore;
                player.innerText = playerScore;

                result.innerHTML="<span>You Win! Paper beats Rock.</span>";

            } else if (lowercaseP == "paper" && lowercaseC == "scissors") {

                computerScore= ++computerScore;
                enemy.innerText = computerScore;

                result.innerHTML="<span>You Lose! Scissors beats Paper.</span>";

            } else if (lowercaseP === lowercaseC) {

                result.innerHTML='<span>Its a tie!</span>';
            }
            checkWinner();
                
            
        console.log(playerScore)
        console.log(computerScore)
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