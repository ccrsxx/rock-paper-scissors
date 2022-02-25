import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface GameBoardProps {
  handleClick: (choice: IconDefinition) => void;
  faHandBackFist: IconDefinition;
  faHand: IconDefinition;
  faHandScissors: IconDefinition;
}

export function ChoiceBoard({
  handleClick,
  faHandBackFist,
  faHand,
  faHandScissors
}: GameBoardProps) {
  return (
    <div className='game-board'>
      <button
        type='button'
        className='choice-card'
        tabIndex={0}
        onClick={() => handleClick(faHandBackFist)}
      >
        <FontAwesomeIcon icon={faHandBackFist} />
      </button>
      <button
        type='button'
        className='choice-card'
        tabIndex={0}
        onClick={() => handleClick(faHand)}
      >
        <FontAwesomeIcon icon={faHand} />
      </button>
      <button
        type='button'
        className='choice-card'
        tabIndex={0}
        onClick={() => handleClick(faHandScissors)}
      >
        <FontAwesomeIcon icon={faHandScissors} />
      </button>
    </div>
  );
}
