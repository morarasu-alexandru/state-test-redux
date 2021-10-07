import { getBooksApi } from "../../mock";
import { AppThunk } from "../types";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export enum BookListActionTypes {
  GetBookListThunk = "BOOK-LIST--GET-BOOKS-THUNK",
  GetBookListRequest = "BOOK-LIST--GET-BOOKS-REQUEST",
  GetBookListFailure = "BOOK-LIST--GET-BOOKS-FAILURE",
  GetBookListSuccess = "BOOK-LIST--GET-BOOKS-SUCCESS",
}

interface GetBookListRequest {
  type: typeof BookListActionTypes.GetBookListRequest;
}

interface GetBookListFailure {
  type: typeof BookListActionTypes.GetBookListFailure;
  payload: {
    error: string;
  };
}

interface GetBookListSuccess {
  type: typeof BookListActionTypes.GetBookListSuccess;
  payload: {
    newList: any[];
  };
}

const getBookListRequest = (): GetBookListRequest => ({
  type: BookListActionTypes.GetBookListRequest,
});

const getBookListFailure = ({
  error,
}: {
  error: string;
}): GetBookListFailure => ({
  type: BookListActionTypes.GetBookListFailure,
  payload: { error },
});

const getBookListSuccess = ({
  newList,
}: {
  newList: any[];
}): GetBookListSuccess => ({
  type: BookListActionTypes.GetBookListSuccess,
  payload: { newList },
});

export const getBookListThunk =
  (): AppThunk => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getBookListRequest());

    getBooksApi()
      .then((res) => {
        dispatch(getBookListSuccess({ newList: res }));
      })
      .catch((error) => {
        dispatch(getBookListFailure({ error }));
      });
  };

export type BookListActions =
  | GetBookListRequest
  | GetBookListFailure
  | GetBookListSuccess;
