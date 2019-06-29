import DEFINE_USERNAME from "./actionTypes";

const defineUserNameActions = () => dispatch => {
  dispatch({
    type: DEFINE_USERNAME,
    payload: "firattale"
  });
};

export default defineUserNameActions;
