import { DEFINE_USERNAME } from "../actions/actionTypes";
import { HANDLE_LOGIN_VISIBILITY } from "../actions/actionTypes";
import initialState from "../state";

const memoryApp = (state = initialState, action) => {
  switch (action.type) {
    case DEFINE_USERNAME:
      return {
        ...state,
        userName: action.payload
      };
    case HANDLE_LOGIN_VISIBILITY:
      return {
        ...state,
        loginVisibility: action.payload
      };
    default:
      return state;
  }
};

export default memoryApp;
