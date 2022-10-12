import { combineReducers } from "redux";
import reducer from "./reducer";
import reducerb from "./reducerb";
export const rootReducer = combineReducers({
  first: reducer,
  second: reducerb,
});
