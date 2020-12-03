import React, { useState } from "react";
import "./BorderRadiusPreviewerPercent.css";

const BorderRadiusPreviewerPercent = () => {
  const [radius, setRadius] = useState({
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  });
  return (
    <div className='container'>
      <div className='generator'>
        <div
          className='generator__shape'
          style={{
            borderRadius: `
              ${radius.top}% 
              ${100 - radius.top}% 
              ${100 - radius.bottom}% 
              ${radius.bottom}% 
              / 
              ${radius.left}% 
              ${radius.right}% 
              ${100 - radius.left}% 
              ${100 - radius.right}%
              `,
          }}
        />
        <span
          className='generator__handler'
          id='top'
          style={{ left: `${radius.top}%` }}
        />

        <span
          className='generator__handler'
          id='left'
          style={{ top: `${radius.left}%` }}
        />

        <span
          className='generator__handler'
          id='right'
          style={{ top: `${radius.right}%` }}
        />

        <span
          className='generator__handler'
          id='bottom'
          style={{ left: `${radius.bottom}%` }}
        />
      </div>
    </div>
  );
};

export default BorderRadiusPreviewerPercent;
