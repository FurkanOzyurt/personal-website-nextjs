import { AnyAction } from "redux";
import { SET_BLOG_CATEGORIES_DATA, SET_BLOG_DATA, SET_BLOG_DETAIL } from "../types";

interface IContentReducerInitialState {
  blog: Array<any>;
  blogDetail: object;
  blogCategories: Array<any>
}

const initialState: IContentReducerInitialState = {
  blog: [],
  blogDetail: {},
  blogCategories: [],
};

const contentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_BLOG_DATA:
      return {
        ...state,
        blog: action.data,
      };
    case SET_BLOG_DETAIL:
      return {
        ...state,
        blogDetail: action.data,
      };
    case SET_BLOG_CATEGORIES_DATA:
      return {
        ...state,
        blogCategories: action.data,
      };
    default:
      return state;
  }
};

export default contentReducer;
