import React, { useContext, useState } from 'react';
import { Bai1 } from './Bai1';
const Bai4: React.FC = () => {
  const { state, setState } = useContext(Bai1);
  const [buttonColor, setButtonColor] = useState(state);
  const [buttonText, setButtonText] = useState('Blue');
  const handleButtonClick = () => {
    if (buttonColor === 'blue') {
      setButtonColor('red');
      setButtonText('Red');
    } else {
      setButtonColor('blue');
      setButtonText('Blue');
    }
    setState(buttonColor);
  };
  return (
    <div>
      <p>Button color: {buttonText}</p>
      <button 
        style={{ backgroundColor: buttonColor }} 
        onClick={handleButtonClick} 
      >
        Change Color
      </button>
    </div>
  );
};
export default Bai4;