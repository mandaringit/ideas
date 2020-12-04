import React from "react";
import styled, { keyframes } from "styled-components";

const ChristmasLights = () => {
  return (
    <Container>
      <h1>Christmas Lights</h1>
      <div className='lights'>
        <span className='light red'></span>
        <span className='light yellow'></span>
        <span className='light blue'></span>
        <span className='light green'></span>
        <span className='light red'></span>
        <span className='light yellow'></span>
        <span className='light blue'></span>
        <span className='light green'></span>
      </div>
      <div className='controller'>
        <button>start</button>
      </div>
    </Container>
  );
};

export default ChristmasLights;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .lights {
    display: flex;
    margin-bottom: 2rem;
  }

  .light + .light {
    margin-left: 1rem;
  }

  @keyframes glow-1 {
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 0 20px 5px #c0392b;
    }
  }

  @keyframes glow-2 {
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 0 20px 5px #f1c40f;
    }
  }
  @keyframes glow-3 {
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 0 20px 5px #64fcfe;
    }
  }
  @keyframes glow-4 {
    0% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0 0 20px 5px #2ecc71;
    }
  }

  .light {
    position: relative;
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 50%;

    &.red {
      background-color: #c0392b;
      animation: glow-1 1s infinite alternate;
    }
    &.yellow {
      background-color: #f1c40f;
      /* animation: glow-2 1s infinite alternate; */
    }
    &.blue {
      background-color: #64fcfe;
      /* animation: glow-3 1s infinite alternate; */
    }
    &.green {
      background-color: #2ecc71;
      /* animation: glow-4 1s infinite alternate; */
    }
  }

  .light::before {
    content: "";
    background: grey;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    left: 50%;
    top: -25%;
    transform: translateX(-50%);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .controller {
    margin: 1rem;
  }

  .controller > button {
  }

  /* @keyframes test-1 {
    0% {
      border-radius: 0 0 0 0;
      background: #64fcfe;
    }
    25% {
      border-radius: 50% 0 0 0;
      background: darksalmon;
    }
    50% {
      border-radius: 50% 50% 0 0;
      background: indianred;
    }
    75% {
      border-radius: 50% 50% 50% 0;
      background: lightcoral;
    }
    100% {
      border-radius: 50%;
      background: darksalmon;
    }
  } */
`;
