import React from "react";
import styled, { keyframes } from "styled-components";

// styled-components 버전

const ChristmasLights = () => {
  return (
    <Container>
      <h1>Christmas Lights</h1>
      <div className='lights'>
        <Light color={"#c0392b"} />
        <Light color={"#f1c40f"} />
        <Light color={"#64fcfe"} />
        <Light color={"#2ecc71"} />
        <Light color={"#c0392b"} />
        <Light color={"#f1c40f"} />
        <Light color={"#64fcfe"} />
        <Light color={"#2ecc71"} />
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

  .controller {
    margin: 1rem;
  }

  .controller > button {
  }
`;

const Light = styled.span<{ color: string }>`
  & + & {
    margin-left: 1rem;
  }

  position: relative;
  width: 70px;
  height: 70px;
  display: block;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${(props) => glow(props.color)} 1s infinite alternate;

  ::before {
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
`;

const glow = (color: string) => keyframes`
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: 0 0 20px 5px ${color};
  }
`;
