// Counter.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../RootReducers";
import { increment, decrement } from "../reduxReducers/CounterReducer";
import { setName, getName } from "../reduxReducers/StateReducer";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  //counter
  const count = useSelector((state: RootState) => state.counter.value);

  //state
  //  const name = useSelector((state: RootState) => getName(state));
  // console.log(name);

  // const handleChangeName = (newName: string) => {
  //   dispatch(setName(newName));
  // };

  const name = useSelector(getName);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <p>Current Name: {name}</p>
      {/* <button onClick={() => handleChangeName('New Name')}>Change Name</button> */}
      <input type="text" value={name} onChange={handleChange} style={{borderBottom:'2px solid greenyellow'}}/>
    </div>
  );
};

export default Counter;
