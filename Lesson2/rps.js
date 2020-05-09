//rock_paper_scissors.js

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function promt(message) {
  console.log(`=>${message}`);
}

while (true) {
  promt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!['rock', 'paper', 'scissors'].includes(choice)) {
    prompt('Thats not a valid choice');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  promt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')
  ) {
    prompt('You win!');
  } else if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')
  ) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }

  prompt('Do you wnat to pay again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (ansswer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}
