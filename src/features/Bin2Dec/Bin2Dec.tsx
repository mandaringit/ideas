import React, { useState } from "react";

const Bin2Dec = () => {
  const [binary, setBinary] = useState<string>("1");
  const [error, setError] = useState<boolean>(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.match(/^[0-1]+$/g) === null) {
      setError(true);
      return;
    }

    // if (inputValue.length > 0) {
    //   const lastChar = inputValue.charAt(inputValue.length - 1);
    //   if (lastChar !== "0" && lastChar !== "1") {
    //     setError(true);
    //     return;
    //   }
    // }

    setError(false);
    setBinary(e.target.value);
  };

  return (
    <div>
      <h1>Bin2Dec</h1>
      <input
        type='text'
        value={binary}
        onChange={onInputChange}
        maxLength={8}
        placeholder='2진수를 입력하세요.(최대 8자)'
      />
      {error ? <div>0과 1만 입력이 가능합니다.</div> : null}
      <h3>{binary ? parseInt(binary, 2) : "숫자를 입력해주세요"}</h3>
    </div>
  );
};

export default Bin2Dec;
