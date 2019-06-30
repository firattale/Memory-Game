import {
  GAME_FINISHED,
  DEFINE_GAME_SCORE,
  HANDLE_LOGIN_VISIBILITY,
  DEFINE_USERNAME,
  DEFINE_CARDS
} from "../actions/actionTypes";
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
    case GAME_FINISHED:
      return {
        ...state,
        isGameFinished: action.payload
      };
    case DEFINE_GAME_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case DEFINE_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  }
};

export default memoryApp;
