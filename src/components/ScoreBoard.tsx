import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ScoreBoardProps {
  desc: { title: string; subtitle: string };
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
  player: IconDefinition;
  playerScore: number;
  computer: IconDefinition;
  computerScore: number;
}

export function ScoreBoard({
  desc,
  isClicked,
  setIsClicked,
  player,
  playerScore,
  computer,
  computerScore
}: ScoreBoardProps) {
  return (
    <div className='score-board'>
      <div className='score-text'>
        <h2>{desc.title}</h2>
        <h3>{desc.subtitle}</h3>
      </div>
      <div className='game-state'>
        <div className='player-card'>
          <div
            className={isClicked ? 'player-icon animate' : 'player-icon'}
            onAnimationEnd={() => setIsClicked(false)}
          >
            <FontAwesomeIcon icon={player} />
          </div>
          <h4>Player: {playerScore}</h4>
        </div>
        <div className='player-card'>
          <div
            className={isClicked ? 'player-icon animate' : 'player-icon'}
            onAnimationEnd={() => setIsClicked(false)}
          >
            <FontAwesomeIcon icon={computer} />
          </div>
          <h4>Computer: {computerScore}</h4>
        </div>
      </div>
    </div>
  );
}
