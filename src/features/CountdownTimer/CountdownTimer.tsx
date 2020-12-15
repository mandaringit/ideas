import React, { useRef, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
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
    padding: 0.5rem;
    color: white;
    background-color: skyblue;
    border-radius: 5px;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
`;

const TimerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1rem;
`;

export interface TimerOption {
  name: string;
  selectDate: number;
}

const CountdownTimer = () => {
  const dateEl = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [timers, setTimers] = useState<TimerOption[]>([]);
  const [error, setError] = useState("");

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onTimerAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");

    const { valueAsNumber } = dateEl.current as HTMLInputElement;
    const selectDate = valueAsNumber - 9 * 60 * 60 * 1000;
    if (isNaN(selectDate)) {
      setError("날짜를 선택해주세요");
      return;
    }

    setTimers((prev) => [...prev, { name, selectDate }]);
    setName("");
  };

  const removeTimer = (timerOption: TimerOption) => {
    setTimers((prev) => prev.filter((option) => timerOption !== option));
  };

  return (
    <Container>
      <h1>Countdown Timer</h1>
      <TimerForm>
        <input
          type='text'
          placeholder='이벤트 명을 입력하세요'
          value={name}
          onChange={onChangeHanlder}
        />
        <input type='date' ref={dateEl} />
        {error ? <span className='error'>{error}</span> : null}
        <button className='add' onClick={onTimerAdd}>
          ADD
        </button>
      </TimerForm>
      <TimerGrid>
        {timers.map((option, idx) => (
          <Timer key={idx} option={option} removeTimer={removeTimer} />
        ))}
      </TimerGrid>
    </Container>
  );
};

export default CountdownTimer;
