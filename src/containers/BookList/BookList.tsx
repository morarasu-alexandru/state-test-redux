import React, { useCallback } from "react";
import { useAppSelector } from "../../hooks/appSelector";
import { selectBooks } from "../../store/reducers/bookListReducer";
import { getBookListThunk } from "../../store/actions/listActions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

const BookList = () => {
  const book = useAppSelector(selectBooks);
  const dispatch: Dispatch<any> = useDispatch();

  const getBookListAction = useCallback(
    () => dispatch(getBookListThunk()),
    [dispatch]
  );

  return (
    <div>
      <button onClick={getBookListAction}>Get Books</button>
      {book.isLoading ? <span>loading</span> : <span>Not loading</span>}
      {book.list.map((book) => (
        <div>
          <div>{book.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
