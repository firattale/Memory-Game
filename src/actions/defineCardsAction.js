import { DEFINE_CARDS } from "./actionTypes";
import initializeDeck from "../utils";

const cards = initializeDeck();

export function defineCardsAction() {
  return { type: DEFINE_CARDS, payload: cards };
}

export default defineCardsAction;
