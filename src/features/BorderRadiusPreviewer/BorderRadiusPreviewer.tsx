import React, { createRef, useState } from "react";
import "./BorderRadiusPreviewer.css";

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
    <div className='container'>
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
    </div>
  );
};

export default BorderRadiusPreviewr;
