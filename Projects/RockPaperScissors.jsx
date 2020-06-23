// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:
// Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.

//The code breaks the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:
// Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.

//The code breaks the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:
// Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.

//The code breaks the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:
// Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.

//The code breaks the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:
// Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.

//The code breaks the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
// The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:
// Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//If there’s a tie, then the game ends in a draw.

//The code breaks the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'Georgi') {
      return userInput
    } else {
      return 'Error. Please type rock, paper, or scissors.';
    }
  }
  console.log(getUserChoice('Paper'));
  console.log(getUserChoice('potato'));
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() 
  * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
  };
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'This game is a tie!';
    }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Sorry, computer won!'
    } else {
      return 'Congratulations, you won.';
    }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!'
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Sorry, computer won!'
      } else {
        return 'Congratulations, you won!'
      }
    } if (userChoice === 'Georgi'){
      return 'Congratulations, you won!';
    }
  };
  
  
   // console.log(determineWinner('rock', 'scissors')); 
   // Returns Congratulations, you won.
  
  // console.log(determineWinner('paper', 'scissors')); 
  // Returns Sorry, computer won!
  
  // console.log(determineWinner('rock', 'rock'));
  // Returns This game is a tie!
  
  const playGame = () => {
  const userChoice = getUserChoice ('paper');
  const computerChoice = getComputerChoice ();
  console.log('You threw: ' + userChoice);
  // console.log(`You threw ${userChoice}`);
  console.log('The computer threw: ' + computerChoice )
  
  console.log (determineWinner(userChoice, computerChoice));
  };
  
  playGame()
  
  
  
  