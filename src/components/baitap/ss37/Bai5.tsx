import React, { useReducer } from 'react';
const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1; 
    default:
      return state;
  }
};
const Bai5: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0); 
  return (
    <div>
      <p>Trước khi click: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase</button>
      <p>Sau khi click: {count + 1}</p>
    </div>
  );
};
export default Bai5;