import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  book: bookReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
