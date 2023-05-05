import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const visitKey = import.meta.env.VITE_COUNTER_KEY;

const VISITOR_INITIAL_STATE = {
  numOfVisitors: null,
};

const visitorCounting = createSlice({
  name: "visitor",
  initialState: VISITOR_INITIAL_STATE,
  reducers: {
    getVisitors(state, action) {
      state.numOfVisitors = action.payload;
    },
  },
});

console.log(VISITOR_INITIAL_STATE);

export const getNumOfVisitors = () => {
  return async (dispatch) => {
    const request = async () => {
      const res = await axios.get(
        `https://api.countapi.xyz/hit/devhosein.fun/${visitKey}`
      );

      return res.data.value;
    };

    try {
      const respon = await request();
      dispatch(visitorActions.getVisitors(respon));
    } catch (error) {
      console.log(error);
    }
  };
};

export const visitorActions = visitorCounting.actions;

export default visitorCounting;
