// Bai3.tsx
import React, { useContext } from 'react';
import { Bai1 } from './Bai1';

const Bai3: React.FC = () => {
  const { state } = useContext(Bai1);
  return (
    <div>
      <button style={{ backgroundColor: state }}>Click me</button>
    </div>
  );
};
export default Bai3;