import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<number[]>([]);

  const handleAddOneToCounter = () => {
    queueRerenderWithNewCounterValue((prevValue) => prevValue + 1);
  };

  const handleSubtractOneFromCounter = () => {
    queueRerenderWithNewCounterValue((prevValue) => prevValue - 1);
  };

  const handleStoreCurrentCount = () => {
    queueRerenderWithNewStoredValues((prevStoredValues) => [
      ...prevStoredValues,
      counterValueFromCurrentRender,
    ]);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored numbers: {storedValuesFromCurrentRender.join(", ")}</p>
      <p>Counter: {counterValueFromCurrentRender}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
