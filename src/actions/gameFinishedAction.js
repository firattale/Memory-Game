import { GAME_FINISHED } from "./actionTypes";

export default function gameFinishedAction(state) {
  return { type: GAME_FINISHED, payload: state };
}
