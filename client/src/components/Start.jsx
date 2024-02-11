import React, { useEffect, useState } from "react";
import intro from "../sounds/intro-game.mp3";

const Start = ({ onStart }) => {
  const [sound, setSound] = useState(true);
  const [name, setName] = useState("");
  const [showNewGame, setShowNewGame] = useState(false);

  useEffect(() => {
    const audio = document.querySelector("audio");
    const soundState =
      localStorage.getItem("soundState") === "false" ? false : true;
    setSound(soundState);
    audio.play();
  }, []);

  const toggleSound = () => {
    const newSoundState = !sound;
    setSound(newSoundState);
    const audio = document.querySelector("audio");
    newSoundState ? audio.play() : audio.pause();
    localStorage.setItem("soundState", newSoundState);
  };

  const handleNewGame = () => {
    onStart(name);
  };

  const handleNewGameScreen = () => {
    setShowNewGame(true);
  };

  const handleGoBack = () => {
    setShowNewGame(false);
  };

  

  return (
    <div className="cat bg-[#7ab6b1]">
      <audio autoPlay={sound} loop>
        <source src={intro} type="audio/mpeg" />
      </audio>
      <div className="w-full h-screen flex flex-col justify-center items-center text-goofy-primary">
        <span className="cheri text-5xl pointer-events-none">
          Cats and Bomb
        </span>
        {!showNewGame ? (
          <div>
            <div className="flex flex-col justify-center items-center mt-5">
              <button
                className="w-[200px] mt-3 p-2 cheri-regular game-button text-xl bg-goofy-1"
                onClick={handleNewGameScreen}
              >
                New Game
              </button>
              <button className="w-[200px] mt-3 p-2 cheri-regular game-button bg-goofy-1 text-xl">
                Continue
              </button>

              <span className="flex mt-3 space-x-10">
                <button
                  className=" w-[150px] bg-goofy-2 cheri-regular p-2 game-button text-xl"
                  onClick={toggleSound}
                >
                  Sound : {sound ? "On" : "Off"}
                </button>
                <button className=" w-[150px] bg-goofy-2 cheri-regular p-2 game-button text-xl">
                  Help
                </button>
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-5">
            <input
              type="text"
              className="game-text p-4 outline-none cheri-regular text-center bg-goofy-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button
              className="w-[200px] mt-3 p-2 cheri-regular game-button bg-goofy-1 text-xl"
              onClick={handleNewGame}
            >
              Continue
            </button>
            <button
              className="w-[200px] mt-3 p-2 cheri-regular game-button bg-goofy-1 text-xl"
              onClick={handleGoBack}
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Start;
