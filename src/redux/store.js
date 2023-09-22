import { configureStore } from "@reduxjs/toolkit";
import gurulineReducer from './gurulineSlice';

export const store = configureStore({
  reducer: {
    guruline: gurulineReducer,
  },
});