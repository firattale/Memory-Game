import React from "react";
import { useSelector, useDispatch } from "react-redux";
import handleLoginVisibilityAction from "../../actions/handleLoginVisibilityAction";
import gameFinishedAction from "../../actions/gameFinishedAction";

const ScoreBoard = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score);
  const handleClick = () => {
    dispatch(gameFinishedAction(false));
    dispatch(handleLoginVisibilityAction(false));
  };

  return (
    <div>
      Your Score is :{score}
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};

export default ScoreBoard;
