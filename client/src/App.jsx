import React, { useState } from "react";
import { Game, Start } from "./components";

const App = () => {
  const [name, setName] = useState(null);

  const handleStartGame = (name) => {
    setName(name);
  };

  return (
    <>
    {name ? <Game name={name} /> : <Start onStart={handleStartGame} />}
    {/* <Game /> */}
    </>
  );
};

export default App;