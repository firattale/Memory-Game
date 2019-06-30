import React, { useState, useEffect } from "react";
import "./App.css";
// import Login from "../Login/Login";
import Board from "../Board";
import initializeDeck from "../../utils";
export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  useEffect(() => {
    setCards(initializeDeck());
  }, []);
  const handleClick = id => {
    setFlipped([...flipped, id]);
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <div>
        {/* <Login loginVisibility={loginVisibility} /> */}
        <Board cards={cards} flipped={flipped} handleClick={handleClick} />
      </div>
    </div>
  );
}
