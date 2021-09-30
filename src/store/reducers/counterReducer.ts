import {CounterState} from "../types";

const initialState: CounterState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.types) {

    default:
      return state
  }
}

export default counterReducer;
