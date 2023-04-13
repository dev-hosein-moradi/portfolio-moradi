import { configureStore } from "@reduxjs/toolkit";
import themeSwitcher from "./slices/themeSlice";
import visitorCounting from "./slices/visitCounterSlice";

const store = configureStore({
  reducer: {
    theme: themeSwitcher.reducer,
    visitor: visitorCounting.reducer,
  },
});

export default store;
