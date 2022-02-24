import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ScoreBoardProps {
  winner: string;
  player: IconDefinition;
  playerScore: number;
  computer: IconDefinition;
  computerScore: number;
}

export function ScoreBoard({
  winner,
  player,
  playerScore,
  computer,
  computerScore
}: ScoreBoardProps) {
  const desc = !winner
    ? {
        title: 'Choose your weapon',
        subtitle: 'First to score 5 points wins the game'
      }
    : winner === 'Tie'
    ? {
        title: 'Its a tie!',
        subtitle: 'Click to play again'
      }
    : winner === 'Player'
    ? {
        title: 'You win!',
        subtitle: `${computer} is beaten by ${player}`
      }
    : {
        title: 'You lose!',
        subtitle: `${player} is beaten by ${computer}`
      };

  return (
    <div className='score-board'>
      <div className='score-text'>
        <h2>{desc.title}</h2>
        <p>{desc.subtitle}</p>
      </div>
      <div className='game-state'>
        <div className='player-card'>
          <div className='player-icon'>
            <FontAwesomeIcon icon={player} />
          </div>
          <p>Player: {playerScore}</p>
        </div>
        <div className='player-card'>
          <div className='player-icon'>
            <FontAwesomeIcon icon={computer} />
          </div>
          <p>Computer: {computerScore}</p>
        </div>
      </div>
    </div>
  );
}
