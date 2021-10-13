import React, { useCallback } from "react";
import { useAppSelector } from "../../hooks/appSelector";
import { selectBooks } from "../../store/reducers/bookReducer";
import { getBookListThunk } from "../../store/actions/listActions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

const BookList = () => {
  const book = useAppSelector(selectBooks);
  const dispatch: Dispatch<any> = useDispatch();

  const getBookListAction = useCallback(
    () => dispatch(getBookListThunk()),
    // () => dispatch(getBookListThunk({ getError: true })),
    [dispatch]
  );

  return (
    <div>
      <button onClick={getBookListAction}>Get Books</button>
      <div>error if any: {book.error}</div>
      {book.isLoading ? <span>loading</span> : <span>Not loading</span>}
      {book.list.map((book) => (
        <div key={book.title}>
          <div>{book.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
