import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface GameBoardProps {
  handleClick: (choice: IconDefinition) => void;
  faHandBackFist: IconDefinition;
  faHand: IconDefinition;
  faHandScissors: IconDefinition;
}

export function GameBoard({
  handleClick,
  faHandBackFist,
  faHand,
  faHandScissors
}: GameBoardProps) {
  return (
    <div className='game-board'>
      <div
        className='choice-card'
        role='button'
        tabIndex={0}
        onClick={() => handleClick(faHandBackFist)}
      >
        <FontAwesomeIcon icon={faHandBackFist} />
      </div>
      <div
        className='choice-card'
        role='button'
        tabIndex={0}
        onClick={() => handleClick(faHand)}
      >
        <FontAwesomeIcon icon={faHand} />
      </div>
      <div
        className='choice-card'
        role='button'
        tabIndex={0}
        onClick={() => handleClick(faHandScissors)}
      >
        <FontAwesomeIcon icon={faHandScissors} />
      </div>
    </div>
  );
}
