import { AnyAction } from "redux";
import { SUBMIT_CONTACT_FORM_DONE, SUBMIT_CONTACT_FORM_START } from "../types";

interface IContentReducerInitialState {
  loading: boolean
  result: object
}

const initialState: IContentReducerInitialState = {
  loading: false,
  result: {}
};

const formReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM_START:
      return {
        ...state,
        loading: true,
      };
    case SUBMIT_CONTACT_FORM_DONE:
      return {
        ...state,
        result: { message: action.message, error: action.error },
        loading: false,
      };
    default:
      return state;
  }
};

export default formReducer;
