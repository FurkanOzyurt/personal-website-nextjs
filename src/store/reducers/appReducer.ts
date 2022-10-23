import { AnyAction } from "redux";
import {
  ALERT_STATUS,
  CREATE_GLOBAL_ERROR,
  RESET_GLOBAL_ERROR,
  SET_LOADING_STATUS,
} from "../types";

interface IAppReducerInitialState {
  loading: boolean;
  globalAlerts: {
    status?: ALERT_STATUS;
    visibility: boolean;
    title?: string;
    message?: string;
  };
}

const initialState: IAppReducerInitialState = {
  loading: false,
  globalAlerts: {
    visibility: false,
    title: "",
    message: "",
  },
};

const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case CREATE_GLOBAL_ERROR:
      return {
        ...state,
        globalAlerts: {
          status: "ERROR",
          visibility: true,
          title: action.title,
          message: action.message,
        },
      };
    case RESET_GLOBAL_ERROR:
      return {
        ...state,
        globalAlerts: { ...initialState.globalAlerts },
      };
    default:
      return state;
  }
};

export default appReducer;
