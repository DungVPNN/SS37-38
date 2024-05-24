import React, { useState, useCallback } from 'react';

const Bai1 = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
    </div>
  );
};
export default Bai1