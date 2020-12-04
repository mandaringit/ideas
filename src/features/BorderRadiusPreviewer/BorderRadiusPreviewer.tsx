import React, { createRef, useState } from "react";
import styled from "styled-components";

const BorderRadiusPreviewr = () => {
  const box = createRef<HTMLTextAreaElement>();
  const [borderRadius, setBorderRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  const onChnageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onCopy = (e: React.MouseEvent) => {
    box.current!.select();
    document.execCommand("copy");
  };

  return (
    <Container>
      <button onClick={onCopy}>copy</button>
      <div className='grid'>
        <div className='grid-tl'>
          <label htmlFor='topLeft'>{borderRadius.topLeft}</label>
          <input
            type='range'
            name='topLeft'
            value={borderRadius.topLeft}
            onChange={onChnageHandler}
            min='0'
            max='255'
          />
        </div>
        <div className='grid-tr'>
          <label htmlFor='topRight'>{borderRadius.topRight}</label>
          <input
            type='range'
            name='topRight'
            value={borderRadius.topRight}
            onChange={onChnageHandler}
            min='0'
            max='255'
          />
        </div>
        <textarea name='' id='' ref={box}></textarea>
        <div
          className='box'
          style={{
            borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px  ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`,
          }}
        />
        <div className='grid-bl'>
          <label htmlFor='bottomLeft'>{borderRadius.bottomLeft}</label>
          <input
            type='range'
            name='bottomLeft'
            value={borderRadius.bottomLeft}
            onChange={onChnageHandler}
            min='0'
            max='255'
          />
        </div>
        <div className='grid-br'>
          <label htmlFor='bottomRight'>{borderRadius.bottomRight}</label>
          <input
            type='range'
            name='bottomRight'
            value={borderRadius.bottomRight}
            onChange={onChnageHandler}
            min='0'
            max='255'
          />
        </div>
      </div>
    </Container>
  );
};

export default BorderRadiusPreviewr;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .grid-tl {
    grid-area: topLeft;
  }
  .grid-tr {
    grid-area: topRight;
  }
  .grid-bl {
    grid-area: bottomLeft;
  }
  .grid-br {
    grid-area: bottomRight;
  }

  .grid {
    display: grid;
    grid-template-areas:
      "topLeft . topRight"
      ". box ."
      "bottomLeft . bottomRight";
  }

  input[type="range"] {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 100%;
    height: 15px;
    background: #d3d3d3;
    outline: none;
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
  }

  .box {
    width: 300px;
    height: 300px;
    grid-area: box;
    /* border: 1px solid black; */
    background-color: rosybrown;
  }
`;
