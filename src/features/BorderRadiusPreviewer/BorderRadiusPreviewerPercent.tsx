import React, { useState } from "react";
import styled from "styled-components";

const BorderRadiusPreviewerPercent = () => {
  const [radius, setRadius] = useState({
    top: 50,
    left: 50,
    right: 50,
    bottom: 50,
  });
  return (
    <Container>
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
    </Container>
  );
};

export default BorderRadiusPreviewerPercent;

const Container = styled.div`
  display: flex;
  justify-content: center;

  .generator {
    width: 50vmin;
    height: 50vmin;
    border: 2px dashed grey;
    position: relative;
  }

  .generator__shape {
    width: 100%;
    height: 100%;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background-color: salmon;
  }

  .generator__handler {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
  }

  .generator__handler::before {
    position: absolute;
    content: "";
    background: red;
    border: 2px solid black;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    left: 0.75rem;
    top: 0.75rem;
  }

  .generator #left {
    transform: translateY(-50%);
    left: -1.25rem;
  }

  .generator #right {
    transform: translateY(-50%);
    right: -1.25rem;
  }

  .generator #top {
    transform: translateX(-50%);
    top: -1.25rem;
  }

  .generator #bottom {
    transform: translateX(-50%);
    bottom: -1.25rem;
  }
`;
