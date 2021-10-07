import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import bookListReducer from "./bookListReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  book: bookListReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
