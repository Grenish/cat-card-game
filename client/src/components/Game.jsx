import React, { useEffect, useState } from "react";
import { bomb, diffuse, shuffle, cat } from "../assets/index.js";

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Game = ({ name }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      topStart: cat,
      middle: cat,
      bottomEnd: cat,
      dex: "cat,",
    },
    {
      id: 2,
      topStart: cat,
      middle: cat,
      bottomEnd: cat,
      dex: "cat,",
    },
    {
      id: 3,
      topStart: bomb,
      middle: bomb,
      bottomEnd: bomb,
      dex: "bomb,",
    },
    {
      id: 4,
      topStart: shuffle,
      middle: shuffle,
      bottomEnd: shuffle,
      dex: "shuffle,",
    },
    {
      id: 5,
      topStart: diffuse,
      middle: diffuse,
      bottomEnd: diffuse,
      dex: "diffuse,",
    },
  ]);

  const [flippedCards, setFlippedCards] = useState(
    Array(cards.length).fill(false)
  );

  const handleFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  useEffect(() => {
    setCards((cards) => shuffleArray(cards));
  }, []);

  return (
    <div className="w-full h-screen bg-[#7ab6b1]">
      <div className="flex gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-container ${flippedCards[index] ? "" : "flipped"}`}
            onClick={() => handleFlip(index)}
          >
            {/* Card Front */}
            <div className="card-front">
              <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-between">
                <div className="flex justify-start w-full p-1">
                  <img src={card.topStart} alt={card.dex} className="w-10" />
                </div>
                <span>
                  <img src={card.middle} alt={card.dex} />
                </span>
                <div className="flex justify-end w-full p-1">
                  <img src={card.bottomEnd} alt={card.dex} className="w-10" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div className="card-back">
              <div className="paws w-full h-full bg-[#fce9e2] rounded-xl flex flex-col items-center justify-between "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
