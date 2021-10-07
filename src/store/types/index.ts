import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { CounterActions } from "../actions/counterActions";
import { BookListActions } from "../actions/listActions";

export interface CounterState {
  value: number;
}

export interface BookListState {
  list: any[];
  isLoading: boolean;
  error: null | string;
}

export interface AppState {
  counter: CounterState;
  book: BookListState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppActions = CounterActions | BookListActions;
