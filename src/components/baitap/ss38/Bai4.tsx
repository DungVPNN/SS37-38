import React, { useState, useMemo } from 'react';

const Bai4 = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const number = useMemo(() => {
    return Math.floor(Math.random() * 1000) + 1;
  }, []);
  const handle = () => {
    setRandomNumber(number);
  };
  return (
    <div>
      <h2>Random Number Generator</h2>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
      <button onClick={handle}>Generate</button>
    </div>
  );
};
export default Bai4;