import React, { useReducer } from 'react';

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'DECREASE':
      return state === 0 ? state : state - 1; 
    default:
      return state;
  }
};
const Bai6: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 10); 
  return (
    <div>
      <p>Trước khi click: {count}</p>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease</button>
      <p>Sau khi click: {count > 0 ? count - 1 : count}</p>
    </div>
  );
};
export default Bai6;