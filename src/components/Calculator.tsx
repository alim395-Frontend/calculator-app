import React, { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

const Calculator: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [previousResult, setPreviousResult] = useState<string>("");
  const [inputExpression, setInputExpression] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "=") {
      setResult(math.evaluate(inputExpression).toString());
    } else {
      setInputExpression(inputExpression + value);
    }
  };

  const handleClear = () => {
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = math.evaluate(inputExpression).toString();
      setResult(evaluatedResult);
      setPreviousResult(evaluatedResult);
      setInputExpression("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleUsePreviousResult = () => {
    setInputExpression((prevExpression) => prevExpression + previousResult);
  };

  return (
    <div>
      <div>
        <input type="text" value={result} disabled />
      </div>
      <input
        type="text"
        value={inputExpression}
        onChange={(event) => setInputExpression(event.target.value)}
      />
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
      </div>
      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleUsePreviousResult}>M</button>
      </div>
    </div>
  );
};

export default Calculator;
