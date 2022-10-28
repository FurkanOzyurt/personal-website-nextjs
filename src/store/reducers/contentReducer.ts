import { AnyAction } from "redux";
import { SET_BLOG_DATA, SET_PROJECTS_DATA } from "../types";

interface IContentReducerInitialState {
  blog: Array<any>;
  projects: Array<any>;
}

const initialState: IContentReducerInitialState = {
  blog: [],
  projects: [],
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
    default:
      return state;
  }
};

export default contentReducer;
