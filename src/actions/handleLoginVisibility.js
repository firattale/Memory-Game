import { HANDLE_LOGIN_VISIBILITY } from "./actionTypes";

// const defineUserNameActions = () => dispatch => {
//   dispatch({
//     type: HANDLE_LOGIN_VISIBILITY,
//     payload: true
//   });
// };

export function defineUserNameActions(text) {
  return { type: HANDLE_LOGIN_VISIBILITY, payload: true };
}

export default defineUserNameActions;
