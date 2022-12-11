import { AnyAction } from "redux";
import { SET_BLOG_CATEGORIES_DATA, SET_BLOG_DATA, SET_BLOG_DETAIL, SET_PROJECTS_DATA } from "../types";

interface IContentReducerInitialState {
  blog: Array<any>;
  blogDetail: object;
  projects: Array<any>;
  blogCategories: Array<any>
}

const initialState: IContentReducerInitialState = {
  blog: [],
  blogDetail: {},
  projects: [],
  blogCategories: [],
};

const contentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_BLOG_DATA:
      return {
        ...state,
        blog: action.data,
      };
    case SET_PROJECTS_DATA:
      return {
        ...state,
        projects: action.data,
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
