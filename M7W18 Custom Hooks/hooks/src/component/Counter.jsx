import React from "react"
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [counter, increment, decrement, reset] = useCounter();
  // const [counter2, increment2, decrement2, reset2] = useCounter();
  const { increment, decrement, reset,counter} = useCounter();
  const counter2 = useCounter();
  

  return (
    <div>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div>
        <h1>Counter: {counter2.counter}</h1>
        <button onClick={counter2.increment}>Increment</button>
        <button onClick={counter2.decrement}>Decrement</button>
        <button onClick={counter2.reset}>Reset</button>
      </div>

    </div>
  )
};

export default Counter;
