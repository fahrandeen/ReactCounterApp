import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = (count) => {
    setCount(count + 1);
  };
  const subtract = (count) => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <section className="container-fluid">
      <div className="container text-center">
        <h1>React Counter App</h1>
        <div className="numberCircle">
          <p>{count}</p>
        </div>
        <div className="buttons">
          <button className="btn btn-warning" onClick={() => subtract(count)}>
            - Subtract
          </button>
          <button className="btn btn-warning" onClick={() => reset()}>
            ! Reset
          </button>
          <button
            className="btn btn-warning"
            onClick={() => incrementCount(count)}
          >
            + Add
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
