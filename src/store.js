import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = {
  userName: "",
  score: 0
};

export default function configureStore(initialState = state) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
