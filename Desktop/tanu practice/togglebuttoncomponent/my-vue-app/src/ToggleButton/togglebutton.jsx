
import{ useState } from 'react';

 function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(false);

  const handleClick = ( ) => {
    setIsOn((prev) => !prev);
  };


  return (
    <div>
        <button onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
    {label && <span> {label}</span>}


    </div>
    
  );
}

export default ToggleButton;