import { Dispatch } from "redux";
import { GET_MY_USER_DATA } from "../types";
import * as userRequest from "src/api/user/userAPICall";
import { createGlobalError } from "./appActions";

export const getMyUserData = () => async (dispatch: Dispatch) => {
  try {
    const response: any = await userRequest.getMyUserRequest();
    dispatch({
      type: GET_MY_USER_DATA,
      data: response,
    });
  } catch (error) {
    dispatch(createGlobalError("0404") as any);
  }
};
