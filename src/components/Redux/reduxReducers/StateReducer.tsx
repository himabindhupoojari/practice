// StateReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateCounterStateType {
  name: string;
}

const initialState: StateCounterStateType = {
  name: 'Bindu',
};

const stateSlice = createSlice({
  name: 'stateCounter',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

// Export the action created by the slice
export const { setName } = stateSlice.actions;

// A selector to get the name from the state
export const getName = (state: { stateCounter: StateCounterStateType }) => state.stateCounter.name;

export default stateSlice.reducer;
