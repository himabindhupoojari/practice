// for static form
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface formtype {
  name: string;
  email: string;
  message: string;
}

const initialState: formtype = {
  name: "",
  email: "",
  message: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.message = "";
    },
  },
});

export const { setName, setEmail, setMessage, resetForm } = formSlice.actions;
export default formSlice.reducer;
