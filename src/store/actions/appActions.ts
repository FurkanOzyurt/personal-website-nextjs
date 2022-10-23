import { Dispatch } from "redux";
import {
  CREATE_GLOBAL_ERROR,
  RESET_GLOBAL_ERROR,
  SET_LOADING_STATUS,
} from "../types";

export const startLoadingAction = () => (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING_STATUS, status: true });
};
export const finishLoadingAction = () => (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING_STATUS, status: false });
};
export const createGlobalError =
  (title: string, message: string) => (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_GLOBAL_ERROR,
      title: title,
      message: message,
    });
  };
export const resetGlobalError = () => (dispatch: Dispatch) => {
  dispatch({
    type: RESET_GLOBAL_ERROR,
  });
};
