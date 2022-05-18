import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');


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

    console.log('in playGame function, userChoice:', userChoice);
    console.log('in playGame function, computerChoice:', computerChoice);

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

  const setChoice = (a) => {
    setUserChoice(a)
    console.log(userChoice);
  }
  
  return (
    <>
      <header className="Header">
        <h1>Rock Paper Scissors</h1>
      </header>
      <div>
      
        <button onClick={() => setChoice("rock")}>Rock</button>
        <button onClick={() => setChoice("paper")}>Paper</button>
        <button onClick={() => setChoice("scissors")}>Scissors</button>


          {/* <button onClick={setChoice}>Rock</button>
          <button>Paper</button>
          <button>Scissors</button> <br />
          <button onClick={playGame}>Play Game</button> */}
    
        {/* <h3>You chose {userChoice}</h3> */}
        <h1>{result}</h1>
      </div>
    </>
  );
}

export default App;
