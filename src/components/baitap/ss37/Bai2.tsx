// Bai2.tsx
import React, { useReducer, useContext } from 'react';
import { Bai1 } from './Bai1';

const reducer = (state: string, action: { type: string }) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return 'blue'; 
    default:
      return state;
  }
};
export default function Bai2() {
  const { state, setState } = useContext(Bai1);
  const [color, dispatch] = useReducer(reducer, state);
  return (
    <Bai1.Provider value={{ state: color, setState: dispatch }}>
    </Bai1.Provider>
  );
}