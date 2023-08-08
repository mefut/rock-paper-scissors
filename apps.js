
const rpsButtons = document.querySelectorAll(".rpsButton")
const rpsButtonsArray = Array.from(rpsButtons)
const resultDiv = document.getElementById("result")
const endGameButton = document.getElementById("endGameButton")

function userChoice(button) {
  const userChoiceValue = button.value
  console.log(userChoiceValue)
  const computerChoiceValue = getComputerChoice()
  const result = determineWinner(userChoiceValue, computerChoiceValue)
 
  resultDiv.innerHTML = `
  <div style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px; margin: 10px 0;">
    <p><strong>User's choice:</strong> ${userChoiceValue}</p>
    <p><strong>Computer's choice:</strong> ${computerChoiceValue}</p>
    <p><strong>Result:</strong> ${result}</p>
  </div>
`
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"]
  const randomNumber = Math.floor(Math.random() * 3)
  console.log(choices[randomNumber])
  return choices[randomNumber]
}

function determineWinner(userChoice, computerChoice) {
  if(userChoice == computerChoice )
  {
    return "it's a tie"
  }else if(userChoice == "Rock" && computerChoice == "Paper" || userChoice == "Paper" && computerChoice == "Scissors" || userChoice == "Scissors" && computerChoice == "Rock")
  {
    return " computer wins"
  }else if(userChoice == "Rock" && computerChoice == "Scissors" || userChoice == "Paper" && computerChoice == "Rock" || userChoice == "Scissors" && computerChoice == "Paper")
  return "you win"
}

rpsButtonsArray.forEach(button => {
  button.onclick = () => {
    userChoice(button)
  }
})

// endGameButton.onclick = () => {
//     const elementsToClear = [resultDiv];
//     elementsToClear.forEach(element => {
//       element.innerText = "";
//     });
//   };

function clearScore() {
    resultDiv.innerText = ""
  }
  endGameButton.onclick = () => clearScore()
  