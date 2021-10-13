import { BookListActions, BookActionTypes } from "../actions/listActions";
import { AppState, BookListState } from "../types";

const initialState: BookListState = {
  list: [],
  isLoading: false,
  error: null,
};

const bookReducer = (state = initialState, action: BookListActions) => {
  switch (action.type) {
    case BookActionTypes.GetBookListRequest: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case BookActionTypes.GetBookListSuccess: {
      return {
        ...state,
        isLoading: false,
        list: action.payload.newList,
      };
    }

    case BookActionTypes.GetBookListFailure: {
      return {
        ...state,
        isLoading: false,
        list: [],
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};

export const selectBooks = (state: AppState): BookListState => {
  return state.book;
};

export default bookReducer;
