const choices = ["rock", "paper", "scissors"];
const userScoreElem = document.getElementById("userscore");
const computerScoreElem = document.getElementById("computerscore");
const resultElem = document.getElementById("result");
const playButton = document.getElementById("playButton");


let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    document.getElementById(choice).addEventListener("click", () => {
        playGame(choice);
    });
});

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winner = getWinner(userChoice, computerChoice);

    if (winner === "user") {
        userScore++;
        resultElem.textContent = `You win! ${capitalize(userChoice)} beats ${capitalize(computerChoice)}.`;
        resultElem.style.color = "green";
    } else if (winner === "computer") {
        computerScore++;
        resultElem.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(userChoice)}.`;
        resultElem.style.color = "red";
    } else {
        resultElem.textContent = `It's a draw! You both choose ${capitalize(userChoice)}.`;
        resultElem.style.color = "yellow";
    }

    userScoreElem.textContent = userScore;
    computerScoreElem.textContent = computerScore;
}

function getWinner(user, computer) {
    if (user === computer) return "draw";
    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "user";
    }
    return "computer";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

playButton.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScoreElem.textContent = userScore;
    computerScoreElem.textContent = computerScore;  
    resultElem.textContent = "Game reset! Choose your option.";
    resultElem.style.color = "red";
        document.getElementById(choice).disabled = false;
    });