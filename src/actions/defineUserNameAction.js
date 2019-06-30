import { DEFINE_USERNAME } from "./actionTypes";

// const defineUserNameActions = (input) => dispatch => {
//   dispatch({
//     type: DEFINE_USERNAME,
//     payload: "firattale"
//   });
// };

export function defineUserNameActions(text) {
  return { type: DEFINE_USERNAME, payload: text };
}

export default defineUserNameActions;
