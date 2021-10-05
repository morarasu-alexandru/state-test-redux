import {combineReducers} from "redux";
import counterReducer from "./counterReducer";


const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
