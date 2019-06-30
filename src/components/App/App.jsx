import React, { useState, useEffect } from "react";
import Board from "../Board";
import ScoreBoard from "../ScoreBoard";
import gameFinishedAction from "../../actions/gameFinishedAction";
import Login from "../Login";
import { useSelector, useDispatch } from "react-redux";
import Timer from "react-compound-timer";
import initializeDeck from "../../utils";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [disabled, setDisabled] = useState(false);
  const loginVisibility = useSelector(state => state.loginVisibility);
  const userName = useSelector(state => state.userName);
  const isGameFinished = useSelector(state => state.isGameFinished);
  const dispatch = useDispatch();

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    return () => window.removeEventListener("resize", resizeListener);
  });

  useEffect(() => {
    checkGameStatus();
  });

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  const sameCardClickedTwice = id => flipped.includes(id);

  const isAMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const checkGameStatus = () => {
    if (cards.length === solved.length && cards.length !== 0) {
      dispatch(gameFinishedAction());
    }
  };

  const handleClick = id => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped(flipped => [...flipped, id]);
      setDisabled(false);
    } else {
      if (sameCardClickedTwice(flipped, id)) return;
      setFlipped(flipped => [...flipped, id]);
      if (isAMatch(id)) {
        setSolved([...solved, ...flipped, id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  return (
    <div>
      <h1>Memory Game</h1>
      {!isGameFinished && !loginVisibility && <Login />}
      {!isGameFinished && loginVisibility && <h3>UserName: {userName}</h3>}
      {!isGameFinished && loginVisibility && (
        <Timer>
          Score: <Timer.Seconds />
        </Timer>
      )}
      {loginVisibility && !isGameFinished && (
        <Board
          cards={cards}
          flipped={flipped}
          solved={solved}
          dimension={dimension}
          handleClick={handleClick}
          disabled={disabled}
        />
      )}
      {isGameFinished && <ScoreBoard />}{" "}
    </div>
  );
}
