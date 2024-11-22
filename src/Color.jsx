import { useState } from "react";

export default () => {
  const [color, setColor] = useState(""); 
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
    const green = Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
    const blue = Math.floor(Math.random() * 255).toString(16).padStart(2, "0");
    const randomColor = `#${red}${green}${blue}`;
    setColor(randomColor); 
  };
  return (
    <>
     
        <div
          onClick={generateRandomColor}
          className="flex items-center justify-centerflex-col border border-black p-56 "
          style={{ backgroundColor: color }}
        >
          <p className="text-4xl font-bold text-white">British privelege</p>
        </div>
    
    </>
  );
};