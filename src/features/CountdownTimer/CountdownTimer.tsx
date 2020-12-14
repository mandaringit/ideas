import React, { useRef, useState } from "react";
import styled from "styled-components";
import cx from "classnames";

const CountdownTimer = () => {
  const dateEl = useRef<HTMLInputElement>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [time, setTime] = useState(0);
  const [error, setError] = useState("");

  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");

    const { valueAsNumber } = dateEl.current as HTMLInputElement;
    const selectDate = valueAsNumber - 9 * 60 * 60 * 1000;
    if (isNaN(selectDate)) {
      setError("날짜를 선택해주세요");
      return;
    }
    const iID = setInterval(() => {
      const now = new Date().getTime();
      // selectDate가 날짜만 선택하고, 기본적으로 오전 9시를 가리키므로 9시간 빼준다.
      let time = selectDate - now;
      setTime(time);
    }, 1000);

    setIntervalId(iID);
  };

  const onClear = (e: React.MouseEvent) => {
    e.preventDefault();
    clearInterval(intervalId as number);
    setIntervalId(null);
    setTime(0);
  };

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
      <h1>Countdown Timer</h1>
      <TimerForm>
        <label htmlFor=''>
          이벤트명
          <input type='text' />
        </label>

        <label htmlFor=''>
          날짜
          <input type='date' ref={dateEl} />
        </label>
        {error ? <span className='error'>{error}</span> : null}
        {intervalId ? (
          <button className='reset' onClick={onClear}>
            RESET
          </button>
        ) : (
          <button className='start' onClick={onClickHandler}>
            START
          </button>
        )}
      </TimerForm>
      <Timer>
        <span className={cx({ off: day === 0 })}>{day} 일</span>
        <span className={cx({ off: hour === 0 })}>{hour} 시간</span>
        <span className={cx({ off: minute === 0 })}>{minute} 분</span>
        <span className={cx({ off: time === 0 })}>{sec} 초</span>
      </Timer>
    </Container>
  );
};

export default CountdownTimer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerForm = styled.form`
  display: flex;
  flex-direction: column;
  * + * {
    margin-top: 1rem;
  }

  span {
    &.error {
      color: red;
      text-align: center;
    }
  }

  button {
    border: none;
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    :focus {
      outline: none;
    }
    &.start {
      background-color: green;
    }
    &.reset {
      background-color: red;
    }
  }
`;

const Timer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2rem;
  gap: 1rem;

  span {
    font-size: 2rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
    &.off {
      opacity: 0.3;
    }
  }
`;
