import React from "react";
import { useToggle } from "../hooks/useToggle";

function ToggleComponent() {
  const [isVisible, toggle] = useToggle();

  return (
    <div>
      <h2>Toggle Component</h2>
      <button onClick={toggle}>Toggle Text</button>
      {isVisible && <p>This is a toggled message!</p>}
    </div>
  );
}

export default ToggleComponent;