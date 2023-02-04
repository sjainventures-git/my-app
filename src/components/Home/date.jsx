import React from 'react';
import CountdownTimer from './timer';

const Try = () => {
  const deadline = new Date('2023-02-11');

  return (
    <div className="app">
      <CountdownTimer deadline={deadline} />
    </div>
  );
};

export default Try;
