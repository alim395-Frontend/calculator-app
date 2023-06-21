import React from "react";
import "mathjs";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <Calculator />
    </div>
  );
};

export default App;
