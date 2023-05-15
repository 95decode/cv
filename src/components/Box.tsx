import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <>
      <div className='Box'>
        {children}
      </div>
    </>
  );
};

export default Box;