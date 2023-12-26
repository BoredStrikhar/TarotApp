import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import styles from "./Counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(2);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
        //   type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>
        <button
          aria-label="incrementByAmount"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Add amount
        </button>
      </div>
    </div>
  );
}
