import { createSlice } from "@reduxjs/toolkit";

const theme = localStorage.getItem("theme");

const THEME_INITIAL_STATE = {
  currentTheme: theme ? theme : "dark",
};

const themeSwitcher = createSlice({
  name: "theme",
  initialState: THEME_INITIAL_STATE,
  reducers: {
    changer(state) {
      localStorage.setItem(
        "theme",
        state.currentTheme === "dark" ? "light" : "dark"
      );
      state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
    },
  },
});

export const themeActions = themeSwitcher.actions;

export default themeSwitcher;
