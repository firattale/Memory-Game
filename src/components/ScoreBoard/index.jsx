import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import {
  handleLoginVisibilityAction,
  gameFinishedAction
} from "../../actions/actions";
import { compare } from "../../utils";

export function ScoreBoard() {
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
      <div className="text-center">
        <p className="text-center mb-4"> Your Score : {score}</p>
        <div />
        <Button className="mb-4" onClick={handleClick}>
          Reset
        </Button>
      </div>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {userScores.map((userScore, i) => (
            <tr key={userScore.userName + i}>
              <td>{i + 1}</td>
              <td>{userScore.userName}</td>
              <td>{userScore.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ScoreBoard;
