import { useState, useRef, useEffect } from 'react';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faQuestion,
  faHandBackFist,
  faHand,
  faHandScissors
} from '@fortawesome/free-solid-svg-icons';
import { Header, Modal, ScoreBoard, ChoiceBoard, Footer } from './components';

const allChoices = {
  [faHandBackFist.iconName]: 'Rock',
  [faHand.iconName]: 'Paper',
  [faHandScissors.iconName]: 'Scissors'
};

export default function App() {
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [player, setPlayer] = useState(faQuestion);
  const [playerScore, setPlayerScore] = useState(0);
  const [computer, setComputer] = useState(faQuestion);
  const [computerScore, setComputerScore] = useState(0);

  const modalMsg = useRef('');

  useEffect(() => {
    if ([playerScore, computerScore].some((score) => score === 5)) {
      modalMsg.current = playerScore === 5 ? '🎉  You won!' : '💀 You lost!';
      setGameOver(true);
      setIsOpen(true);
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
    setIsClicked(true);

    if (!gameOver) {
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
    } else {
      setIsOpen(true);
    }
  };

  const reset = () => {
    setWinner('');
    setGameOver(false);
    setIsOpen(false);
    setIsClicked(false);
    setPlayer(faQuestion);
    setPlayerScore(0);
    setComputer(faQuestion);
    setComputerScore(0);
  };

  const [currentPlayer, currentComputer] = [player, computer].map(
    (icon) => allChoices[icon.iconName]
  );

  const desc = !winner
    ? {
        title: 'Choose your weapon',
        subtitle: 'First to score 5 points wins the game'
      }
    : winner === 'Tie'
    ? {
        title: 'Its a tie!',
        subtitle: 'Both are the same'
      }
    : winner === 'Player'
    ? {
        title: 'You won!',
        subtitle: `${currentComputer} is beaten by ${currentPlayer}`
      }
    : {
        title: 'You lost!',
        subtitle: `${currentPlayer} is beaten by ${currentComputer}`
      };

  return (
    <div className='App'>
      <Header />
      <main>
        <ScoreBoard
          desc={desc}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          player={player}
          playerScore={playerScore}
          computer={computer}
          computerScore={computerScore}
        />
        <Modal
          title={modalMsg.current}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          reset={reset}
        />
        <ChoiceBoard
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
