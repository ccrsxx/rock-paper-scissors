import { useState, useEffect } from 'react';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faQuestion,
  faHandBackFist,
  faHand,
  faHandScissors
} from '@fortawesome/free-solid-svg-icons';
import { Header, ScoreBoard, GameBoard, Footer } from './components';

export default function App() {
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer] = useState(faQuestion);
  const [playerScore, setPlayerScore] = useState(0);
  const [computer, setComputer] = useState(faQuestion);
  const [computerScore, setComputerScore] = useState(0);

  useEffect(() => {
    if (gameOver) {
      // pass for now
    }
    if ([playerScore, computerScore].some((score) => score === 5)) {
      setGameOver(true);
    }
  }, [playerScore, computerScore]);

  const getWinner = (
    playerChoice: IconDefinition,
    computerChoice: IconDefinition
  ) => {
    if (playerChoice === computerChoice) {
      return 'Tie';
    }

    let winnerPlayer;

    // possible combinations for player to win
    (playerChoice === faHandBackFist && computerChoice === faHandScissors) ||
    (playerChoice === faHand && computerChoice === faHandBackFist) ||
    (playerChoice === faHandScissors && computerChoice === faHand)
      ? (winnerPlayer = 'Player')
      : (winnerPlayer = 'Computer');

    return winnerPlayer;
  };

  const getComputerChoice = () => {
    const choices = [faHandBackFist, faHand, faHandScissors];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const handleClick = (choice: IconDefinition) => {
    const computerChoice = getComputerChoice();
    const playerChoice = choice;
    const gameWinner = getWinner(playerChoice, computerChoice);

    setWinner(gameWinner);
    setPlayer(playerChoice);
    setComputer(computerChoice);

    if (gameWinner === 'Player') {
      setPlayerScore(playerScore + 1);
    } else if (gameWinner === 'Computer') {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <ScoreBoard
          winner={winner}
          player={player}
          playerScore={playerScore}
          computer={computer}
          computerScore={computerScore}
        />
        <GameBoard
          handleClick={handleClick}
          faHandBackFist={faHandBackFist}
          faHand={faHand}
          faHandScissors={faHandScissors}
        />
      </main>
      <Footer />
    </div>
  );
}
