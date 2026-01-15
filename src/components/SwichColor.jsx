
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';




const SwichColor = ({ color }) => {
  const [setCurrentColor] = useState(color);
  const handleClick = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', "pink"];
    color = Math.floor(Math.random() * colors.length);
    setCurrentColor(document.body.style.backgroundColor = colors[color]);
  }

  return (
    <div className="swich-color">
      <PrimaryButton className='btn4' text="Cambiar Color" onMyClick={handleClick}></PrimaryButton>
    </div>
  );
}


export default SwichColor;