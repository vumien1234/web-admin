import React, { useEffect } from 'react';

const Overlay = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className='overlay' onClick={handleClickOutside}>
          <div className='overlay-content overflow-hidden'>
            {title && <div className="mb-4 text-[16px] font-bold bg-[#E5F7F2] p-4">{title}</div>}
            <div className="max-w-[800px]">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
