import React, { useState, useCallback } from 'react';

const Bai3 = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const handleChangeColor = useCallback((color) => {
    setSelectedColor(color);
  }, []);

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => handleChangeColor(e.target.value)}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
          marginTop: '10px',
        }}
      ></div>
    </div>
  );
};
export default Bai3;