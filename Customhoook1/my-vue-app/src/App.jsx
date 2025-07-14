import React from "react";
import FormComponent from "./components/FormComponent";
import ToggleComponent from "./components/ToggleComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Hooks Demo</h1>
      <FormComponent />
      <hr />
      <ToggleComponent />
    </div>
  );
}

export default App;