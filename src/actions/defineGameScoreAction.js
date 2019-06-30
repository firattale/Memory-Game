import { DEFINE_GAME_SCORE } from "./actionTypes";

export function defineGameScoreAction(score) {
  return { type: DEFINE_GAME_SCORE, payload: score };
}

export default defineGameScoreAction;
