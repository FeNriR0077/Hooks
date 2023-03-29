import { useEffect } from "react";
import { useCallback } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import NumberList from "./NumberLIst";

export function EffectHooks() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  /* sets value after rendering so intital value is shown before changing. Is async*/
  useEffect(() => {
    if (count === 0) {
      setCount(count + 2);
    }
  }, [count]);

  /* sets value before rendering DOM tree so intital value is shown before changing. Is sync*/
  useLayoutEffect(() => {
    if (secondCount === 0) {
      setSecondCount(secondCount + 2);
    }
  }, [secondCount]);

  return (
    <div
      className="effect-hooks"
      style={{ border: "2px solid black", padding: "1rem" }}
    >
      <h2>UseEffect and UseLayoutEffect</h2>
      Count is {count}{" "}
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        CLICK
      </button>
      Second Count is {secondCount}{" "}
      <button
        onClick={() => {
          setSecondCount(0);
        }}
      >
        CLICK
      </button>
    </div>
  );
}

export const CallbackHooks = () => {
  const [numbers, setNumbers] = useState(0);
  const [numberCount, setNumberCount] = useState(0);

  const handleAddNumbers = useCallback(() => {
    setNumbers(numbers + 1);
  }, [numbers]);

  const handleCount = () => {
    setNumberCount(numberCount + 1);
  };

  return (
    <div
      className="callback-hooks"
      style={{ border: "2px solid black", padding: "1rem" }}
    >
      <h2>UseCallback</h2>

      <NumberList numbers={numbers} handleAddNumbers={handleAddNumbers} />

      <button style={{ backgroundColor: "cyan" }} onClick={handleCount}>
        Count (In parent)
      </button>
      <h3>Count: {numberCount}</h3>
      <h4>Buttons in parent</h4>
    </div>
  );
};
