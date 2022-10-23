import { AnyAction } from "redux";
import { GET_MY_USER_DATA } from "../types";

interface IUserReducerInitialState {
  userData: object;
}

const initialState: IUserReducerInitialState = {
  userData: {},
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_MY_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;
