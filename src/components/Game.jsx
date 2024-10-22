import { useScreen } from "./ScreenContext";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

export default function Game({ tenzies, handleEndGame }) {
  const { renderScreen, fullOpacity } = useScreen();
  const [dices, setDices] = useState(createDices());
  const [isOpen, setIsOpen] = useState(false);

  function createDices() {
    const newDices = [];
    for (let i = 0; i < 10; i++) {
      newDices.push(generateNewDie());
    }
    return newDices;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function holdDice(id) {
    setDices((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dices.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function rollDice() {
    if (!tenzies) {
      setDices((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      handleEndGame(false);
      setDices(createDices());
    }
  }

  useEffect(() => {
    const allHeld = dices.every((die) => die.isHeld);
    const firstValue = dices[0].value;
    const allSameValue = dices.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      handleEndGame(true);
    }
  }, [dices]);

  useEffect(() => {
    setTimeout(() => fullOpacity(), 250);
  }, []);

  return (
    <div className="tenzies__content">
      <div className="game-field">{diceElements}</div>
      <button className="tenzies__button" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
      <button
        className="return tenzies__return"
        onClick={() => {
          renderScreen("menu");
          handleEndGame(false);
        }}
      ></button>
    </div>
  );
}
