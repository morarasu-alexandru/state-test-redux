import { getBooksApi } from "../../mock";
import { AppThunk } from "../types";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export enum BookActionTypes {
  GetBookListRequest = "BOOK-LIST--GET-BOOKS-REQUEST",
  GetBookListFailure = "BOOK-LIST--GET-BOOKS-FAILURE",
  GetBookListSuccess = "BOOK-LIST--GET-BOOKS-SUCCESS",
}

interface GetBookListRequest {
  type: typeof BookActionTypes.GetBookListRequest;
}

interface GetBookListFailure {
  type: typeof BookActionTypes.GetBookListFailure;
  payload: {
    error: string;
  };
}

interface GetBookListSuccess {
  type: typeof BookActionTypes.GetBookListSuccess;
  payload: {
    newList: any[];
  };
}

const getBookListRequest = (): GetBookListRequest => ({
  type: BookActionTypes.GetBookListRequest,
});

const getBookListFailure = ({
  error,
}: {
  error: string;
}): GetBookListFailure => ({
  type: BookActionTypes.GetBookListFailure,
  payload: { error },
});

const getBookListSuccess = ({
  newList,
}: {
  newList: any[];
}): GetBookListSuccess => ({
  type: BookActionTypes.GetBookListSuccess,
  payload: { newList },
});

export const getBookListThunk =
  (details?: { getError: boolean }): AppThunk =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getBookListRequest());

    getBooksApi(details?.getError)
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
