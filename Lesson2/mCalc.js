//mCalc.js]
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalideNumber(number) {
  return (
    number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

prompt('Welcome to My Mortage Calculator!');

while (true) {
  prompt('-------------------------------------------');

  prompt('What is the loan amount?');

  let amount = readline.question();
  while (isInvalideNumber(amount)) {
    prompt('Must enter a positive number');
    amount = readline.question();
  }

  prompt('What is the interest rate?');
  prompt('(Example: 5 for 5% or 2.5 for 2.5%)');
  let interestRate = readline.question();

  while (isInvalideNumber(interestRate)) {
    prompt('Must enter a valid number');
    interestRate = readline.question();
  }

  prompt('What is your loan duration in years?');
  let years = readline.question();

  while (isInvalideNumber(years)) {
    prompt('You must enter a positive number');
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  /*let m = p * (j / (1 - Math.pow((1 + j),(-n))));
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months*/

  let monthlyPayment =
    Number(amount) *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -Number(months))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt('Would you like to perform another calculation?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
