import React, { useState } from "react";
import "./App.css";
// import Login from "../Login/Login";
import Card from "../Card";

export default function App() {
  const [flipped, setFlipped] = useState([]);
  const handleClick = id => {
    setFlipped(id);
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <div>
        {/* <Login loginVisibility={loginVisibility} /> */}
        <Card
          id={1}
          width={100}
          height={100}
          back={"/img/back.png"}
          front={"/img/react.png"}
          flipped={flipped.includes(1)}
          handleClick={() => handleClick(1)}
        />
      </div>
    </div>
  );
}
