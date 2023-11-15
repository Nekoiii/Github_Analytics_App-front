// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import repositoryReducer from "./repositorySlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    repo: repositoryReducer,
  },
});

export default store;
