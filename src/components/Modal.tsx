interface ModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  reset: () => void;
}

export function Modal({ title, isOpen, setIsOpen, reset }: ModalProps) {
  return (
    <>
      <div
        className={isOpen ? 'overlay active' : 'overlay'}
        onClick={() => setIsOpen(false)}
      />
      <div className={isOpen ? 'modal active' : 'modal'}>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title'>{title}</p>
          </div>
          <div className='modal-footer'>
            <button type='button' onClick={reset}>
              Play again
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
