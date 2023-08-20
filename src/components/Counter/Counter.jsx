import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container text-center">
      <h1 className="mb-5">React Counter</h1>
      <h3 className="mb-5">{counter}</h3>
      <div className="btn-group">
        <button
          className="btn btn-success"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            counter > 0 ? setCounter(counter - 1) : setCounter(0)
          }
          disabled = {counter === 0}
        >
          Decrement
        </button>
        <button className="btn btn-secondary" onClick={() => setCounter(0)} disabled = {counter === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
