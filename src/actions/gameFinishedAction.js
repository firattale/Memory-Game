import { GAME_FINISHED } from "./actionTypes";

export default function gameFinishedAction() {
  return { type: GAME_FINISHED, payload: true };
}
