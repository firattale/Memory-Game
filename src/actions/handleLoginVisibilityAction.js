import { HANDLE_LOGIN_VISIBILITY } from "./actionTypes";

export default function handleLoginVisibilityAction(state) {
  return { type: HANDLE_LOGIN_VISIBILITY, payload: state };
}
