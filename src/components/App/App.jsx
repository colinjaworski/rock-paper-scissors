import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  // const getUserChoice = (userChoice) => {
  //   userChoice = userChoice.toLowerCase();
  //   if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
  //     return userChoice
  //   } else {
  //     console.log(`Sorry, ${userChoice} is not valid `);
  //   }
  // }

  const getComputerChoice = () => {
    let computersChoice = Math.floor(Math.random() * 3);
    switch (computersChoice) {
      case 0: setComputerChoice('rock');
        break;
      case 1: setComputerChoice('paper');
        break;
      case 2: setComputerChoice('scissors');

    }
  }

  const playGame = () => {
    
    getComputerChoice();
    console.log('user choice', userChoice)
    console.log('computer choice', computerChoice)

    if (userChoice === computerChoice) {
      setResult('This game was a tie');
    }

    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        setResult('The computer won');
      } else {
        setResult('You won')
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        setResult('You won');
      } else {
        setResult('The computer won');
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        setResult('You lost bud');
      } else {
        setResult('Yay, you win!');
      }
    }
  }


  const setChoice = (value) => {
    setUserChoice(value)
    getComputerChoice()
  }

  return (
    <>
      <header className="Header">
        <h1>Rock Paper Scissors</h1>
      </header>
      <div>

        <input type="text" onChange={(event)=>{setChoice(event.target.value)}} />
        <button onClick={getComputerChoice}>testing</button>
        <button onClick={playGame}>Play Game?</button>
        <h1>{result}</h1>
      </div>
    </>
  );
}

export default App;
