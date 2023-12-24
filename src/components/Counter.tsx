import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const dicrement = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };
  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={dicrement}>dicrement</button>
    </div>
  );
};
