import { combineReducers } from "redux";
import burritto from "./burritoReducer";
import view from "./viewReducer";

const combinedReducer = {
  burritto,
  view,
};

export default combineReducers(combinedReducer);