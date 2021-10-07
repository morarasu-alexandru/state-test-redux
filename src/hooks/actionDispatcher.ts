import { useDispatch, useSelector } from "react-redux";
// import { useCallback } from "react";
import { AppDispatch } from "../store";

// export const useAction = (action) => {
//   const dispatch = useDispatch();
//
//   const customAction = useCallback(() => {
//     return dispatch(action);
//   });
//
//   return customAction;
// };

export const useAppDispatch = () => useDispatch<AppDispatch>();
