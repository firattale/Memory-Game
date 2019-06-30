import { HANDLE_LOGIN_VISIBILITY } from "./actionTypes";

export default function handleLoginVisibilityAction() {
  return { type: HANDLE_LOGIN_VISIBILITY, payload: true };
}
