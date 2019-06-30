import React, { useState, useEffect } from "react";
// import Login from "../Login/Login";
import Board from "../Board";
import initializeDeck from "../../utils";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);
    return () => window.removeEventListener("resize", resizeListener);
  });
  const handleClick = id => {
    setFlipped([...flipped, id]);
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <div>
        {/* <Login loginVisibility={loginVisibility} /> */}
        <Board
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
