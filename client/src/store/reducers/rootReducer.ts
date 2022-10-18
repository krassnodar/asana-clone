import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  uiReducer: uiReducer,
});
