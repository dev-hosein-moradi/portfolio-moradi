import { createSlice } from "@reduxjs/toolkit";

const initial_state = {};

const contactSlice = createSlice({
  name: "contact",
  initialState: initial_state,
  reducers: {},
});

export const conntactActions = contactSlice.actions;
export default contactSlice;
