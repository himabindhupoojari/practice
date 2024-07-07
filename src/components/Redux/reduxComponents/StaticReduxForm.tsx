import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setName,
  setEmail,
  setMessage,
  resetForm,
} from "../reduxReducers/StaticformReducer";
import { RootState } from "../RootReducers";

function StaticReduxForm() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.staticForm);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted:", formState);
    dispatch(resetForm());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formState.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={formState.message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StaticReduxForm;
