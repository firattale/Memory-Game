import React from "react";
import { useSelector, useDispatch } from "react-redux";
import handleLoginVisibilityAction from "../../actions/handleLoginVisibilityAction";
import gameFinishedAction from "../../actions/gameFinishedAction";
import { compare } from "../../utils";

const ScoreBoard = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score);
  const userScores = useSelector(state => state.scoreBoard);
  userScores.sort(compare);
  const handleClick = () => {
    dispatch(gameFinishedAction(false));
    dispatch(handleLoginVisibilityAction(false));
  };

  return (
    <div>
      Your Score is :{score}
      <button onClick={handleClick}>Reset</button>
      <ul>
        {userScores.map((userScore, i) => (
          <li>
            {userScore.userName} - {userScore.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoreBoard;
