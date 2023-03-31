import React from "react";
import { useState } from "react";

const App = () => {
  const [age, setAge] = useState(0);
  const onIncrement = () => {
    setAge(age + 1);
  };
  const onDecrement = () => {
    setAge(age - 1);
  };
  const setZero = () => {
    setAge(0);
  };

  return (
    <div>
      {age}
      <button onClick={onIncrement}>increment ++</button>
      <button onClick={setZero}>set to zero</button>
      <button onClick={onDecrement}>decrement --</button>
    </div>
  );
};

export default App;
