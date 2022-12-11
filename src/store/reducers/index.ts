import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import formReducer from "./formReducer";

export default combineReducers({
  content: contentReducer,
  form: formReducer,
});
