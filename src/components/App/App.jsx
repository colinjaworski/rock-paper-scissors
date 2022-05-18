import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);

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

  const setChoice = (choice) => {
    setUserChoice(choice);
    getComputerChoice();
  }

  const playGame = () => {

    console.log('userChoice ', userChoice);
    console.log('computerChoice ', computerChoice);


    if (userChoice === computerChoice) {
      setResult('This game was a tie');
    }

    else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        setResult('The computer won'); setScore(0);
      } else if (computerChoice === 'rock') {
        setResult('a tie');
      } else {
        setResult('You won'); setScore(score + 1);
        if (score >= highScore) {
          setHighScore(score + 1);
        }
      }
    }

    else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        setResult('You won'); setScore(score + 1);
        if (score >= highScore) {
          setHighScore(score + 1);
        }
      } else if (computerChoice === 'paper') {
        setResult('a tie');
      } else {
        setResult('The computer won'); setScore(0);
      }
    }

    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        setResult('You lost bud'); setScore(0);
      } else if (computerChoice === 'scissors') {
        setResult('a tie');
      } else {
        setResult('You won'); setScore(score + 1);
        if (score >= highScore) {
          setHighScore(score + 1);
        }
      }
    }
  }

  return (
    <>
      <header className="Header">
        <h1>Rock Paper Scissors</h1>
      </header>
      <div>

        <button onClick={() => setChoice('rock')}>Rock</button>
        <button onClick={() => setChoice('paper')}>Paper</button>
        <button onClick={() => setChoice('scissors')}>Scissors</button>
        <button onClick={playGame}>Play Game</button>
        <button onClick={() => setHighScore(0)}>Clear High Score</button>

        <h1>{result}</h1>
        <h2>Your score {score}</h2>
        <h2>High score {highScore}</h2>

      </div>
    </>
  );
}

export default App;
