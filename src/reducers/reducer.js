import DEFINE_USERNAME from "../actions/actionTypes";

const initialState = {
  userName: "",
  score: 0
};

const memoryApp = (state = initialState, action) => {
  switch (action.type) {
    case DEFINE_USERNAME:
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
};

export default memoryApp;
