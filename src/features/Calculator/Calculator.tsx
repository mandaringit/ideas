import React, { useState } from "react";
import styled from "styled-components";

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
    <Container>
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
    </Container>
  );
};

export default Caculator;

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto;
  gap: 1px;

  .display {
    background-color: black;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem 0.3rem 0.3rem 0.3rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .display__number {
    color: white;
    font-size: 3rem;
  }

  button {
    background-color: transparent;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    transition-duration: 0.3s;
    border-radius: 3px;
  }

  button:focus {
    outline: none;
  }

  button:hover {
    opacity: 0.7;
  }

  .button__container {
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 50px);
  }

  .button__feature {
    background-color: #616161;
  }
  .button__number {
    background-color: #9e9e9e;
  }

  .button__operator {
    background-color: #ffa000;
  }

  .button__zero {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;
