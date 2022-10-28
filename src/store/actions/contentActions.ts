import * as contentAPICall from "@/api/content/APICall";
import { Dispatch } from "redux";
import { SET_BLOG_DATA, SET_PROJECTS_DATA } from "../types";
import { createGlobalError } from "./appActions";


export const getHomeData = () => async (dispatch: Dispatch) => {
  try {
    const response: any = await contentAPICall.getAllHomeContent();
    console.log("asda", response);
    dispatch({ type: SET_BLOG_DATA, data: response?.blog ? response?.blog : [] })
    dispatch({ type: SET_PROJECTS_DATA, data: response?.projects ? response?.projects : [] })
  } catch (error) {
    dispatch(createGlobalError("error", "0404") as any);
  }
};
