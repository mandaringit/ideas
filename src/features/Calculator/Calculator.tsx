import React, { useState } from "react";
import "./Caculator.css";

const Caculator = () => {
  const [calcStack, setCalcStack] = useState<[number, string][]>([]);
  const [displayNumber, setdisplayNumber] = useState<number>(0);

  const clearNumber = () => setdisplayNumber(0);
  const changeSign = () => setdisplayNumber(-displayNumber);
  const changePercentage = () => setdisplayNumber(displayNumber / 100);
  const addNumber = (clickNumber: number) => {
    if (displayNumber <= 99999999) {
      setdisplayNumber(displayNumber * 10 + clickNumber);
    }
  };

  const addOperator = (operator: "+" | "-" | "/" | "x" | "=") => {
    setCalcStack((prev) => [...prev, [displayNumber, operator]]);
  };

  const calculate = (): number => {
    if (calcStack.length === 0) return 0;

    let calcNumber = 0;
    for (const stack of calcStack) {
      const [number, operator] = stack;
      if (operator === "+") {
        calcNumber += number;
      } else if (operator === "-") {
        calcNumber -= number;
      } else if (operator === "x") {
        calcNumber *= number;
      } else if (operator === "/") {
        calcNumber /= number;
      }
    }
    return calcNumber;
  };

  const numberButtons = (numbers: number[]) =>
    numbers.map((num) => (
      <button className='button__number' onClick={() => addNumber(num)}>
        {num}
      </button>
    ));

  return (
    <div className='container'>
      <div className='display'>
        <span className='display__number'>
          {displayNumber > 99999999 ? "ERR" : displayNumber}
        </span>
      </div>
      <div className='button__container'>
        <button className='button__feature' onClick={clearNumber}>
          AC
        </button>
        <button className='button__feature' onClick={changeSign}>
          +/-
        </button>
        <button className='button__feature' onClick={changePercentage}>
          %
        </button>
        <button className='button__operator' onClick={() => addOperator("/")}>
          ÷
        </button>
        {numberButtons([7, 8, 9])}
        <button className='button__operator' onClick={() => addOperator("x")}>
          x
        </button>
        {numberButtons([4, 5, 6])}
        <button className='button__operator' onClick={() => addOperator("-")}>
          -
        </button>
        {numberButtons([1, 2, 3])}
        <button className='button__operator' onClick={() => addOperator("+")}>
          +
        </button>
        <button
          className='button__number button__zero'
          onClick={() => addNumber(0)}
        >
          0
        </button>
        <button className='button__number'>.</button>
        <button className='button__operator' onClick={() => addOperator("=")}>
          =
        </button>
      </div>
    </div>
  );
};

export default Caculator;
