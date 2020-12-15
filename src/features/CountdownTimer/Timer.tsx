import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import { TimerOption } from "./CountdownTimer";

const Container = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  .times {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    span {
      font-size: 1rem;
      text-align: center;
      &.off {
        opacity: 0.3;
      }
    }
  }
`;

interface TimerProps {
  option: TimerOption;
  removeTimer: (timerOption: TimerOption) => void;
}

const Timer = ({ option, removeTimer }: TimerProps) => {
  const { name, selectDate } = option;
  const [time, setTime] = useState(selectDate - new Date().getTime());

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date().getTime();
      const remainTime = selectDate - now;
      setTime(remainTime);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [selectDate]);

  let t = time;
  const day = Math.trunc(t / (24 * 60 * 60 * 1000));
  t -= day * (24 * 60 * 60 * 1000);
  const hour = Math.trunc(t / (60 * 60 * 1000));
  t -= hour * (60 * 60 * 1000);
  const minute = Math.trunc(t / (60 * 1000));
  t -= minute * (60 * 1000);
  const sec = Math.trunc(t / 1000);

  return (
    <Container>
      <div className='info'>
        <span>{name}</span>
        <button onClick={() => removeTimer(option)}>CLEAR</button>
      </div>
      <div className='times'>
        <div className={cx({ off: day === 0 })}>
          <span>{day}</span>
          <span>D:</span>
        </div>
        <div className={cx({ off: hour === 0 })}>
          <span>{hour}</span>
          <span>H:</span>
        </div>
        <div className={cx({ off: minute === 0 })}>
          <span>{minute}</span>
          <span>M:</span>
        </div>
        <div className={cx({ off: time === 0 })}>
          <span>{sec}</span>
          <span>S</span>
        </div>
      </div>
    </Container>
  );
};

export default Timer;
