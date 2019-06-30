import { DEFINE_USERNAME } from "./actionTypes";

export function defineUserNameActions(text) {
  return { type: DEFINE_USERNAME, payload: text };
}

export default defineUserNameActions;
