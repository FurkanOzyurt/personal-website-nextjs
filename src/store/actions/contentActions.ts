import * as contentAPICall from "@/api/content/APICall";
import { Dispatch } from "redux";
import { SET_BLOG_CATEGORIES_DATA, SET_BLOG_DATA, SET_BLOG_DETAIL, SET_PROJECTS_DATA } from "../types";
import { createGlobalError } from "./appActions";


export const getHomeData = () => async (dispatch: Dispatch) => {
  try {
    const response: any = await contentAPICall.getAllHomeContent();

    dispatch({ type: SET_BLOG_DATA, data: response?.blog ? response?.blog : [] })
    dispatch({ type: SET_PROJECTS_DATA, data: response?.projects ? response?.projects : [] })
  } catch (error) {
    dispatch(createGlobalError("error", "0404") as any);
  }
};

export const getBlogs = (data: any) => async (dispatch: Dispatch) => {
  try {
    let blogParams = { ...data }
    if (data?.category) {
      const categoryDetail = await contentAPICall.getBlogCategory({ url: data?.category })
      blogParams.category = categoryDetail.data.id
    }
    const response: any = await contentAPICall.getBlogs(blogParams);
    dispatch({
      type: SET_BLOG_DATA, data: {
        paging: response.paging,
        content: response.data
      }
    })
  } catch (error) {
    dispatch(createGlobalError("error", "0404") as any);
  }
};
export const getBlogCategories = () => async (dispatch: Dispatch) => {
  try {
    const response: any = await contentAPICall.getBlogCategories();
    dispatch({
      type: SET_BLOG_CATEGORIES_DATA, data: response.data
    })
  } catch (error) {
    dispatch(createGlobalError("error", "0404") as any);
  }
};
export const getBlogDetail = (url: string) => async (dispatch: Dispatch) => {
  try {
    const response: any = await contentAPICall.getBlogDetail(url);
    dispatch({ type: SET_BLOG_DETAIL, data: response?.data ? response?.data : {} })
    return true
  } catch (error) {
    dispatch(createGlobalError("error", "0404") as any);
    return false
  }
};
