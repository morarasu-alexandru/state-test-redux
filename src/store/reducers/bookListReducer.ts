import { BookListActions, BookListActionTypes } from "../actions/listActions";
import { AppState, BookListState } from "../types";

const initialState: BookListState = {
  list: [],
  isLoading: false,
  error: null,
};

const bookListReducer = (state = initialState, action: BookListActions) => {
  switch (action.type) {
    case BookListActionTypes.GetBookListRequest: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case BookListActionTypes.GetBookListSuccess: {
      return {
        ...state,
        isLoading: false,
        list: action.payload.newList,
      };
    }

    case BookListActionTypes.GetBookListFailure: {
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

export default bookListReducer;
