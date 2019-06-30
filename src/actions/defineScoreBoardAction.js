import { UPDATE_SCOREBOARD } from "./actionTypes";

export function defineScoreBoardAction(state) {
  return { type: UPDATE_SCOREBOARD, payload: state };
}

export default defineScoreBoardAction;
