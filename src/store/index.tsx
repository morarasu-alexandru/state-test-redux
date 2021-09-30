import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};

const store = configureStore();

export default store;
