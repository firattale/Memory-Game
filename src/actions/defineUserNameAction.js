import DEFINE_USERNAME from "./actionTypes";

export const defineUserNameActions = () => dispatch => {
  dispatch({
    type: DEFINE_USERNAME,
    payload: "firattale"
  });
};
