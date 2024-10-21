import { useEffect } from "react";
import { useScreen } from "./ScreenContext";

export default function Menu() {
  const { renderScreen, fullOpacity } = useScreen();

  useEffect(() => {
    setTimeout(() => fullOpacity(), 250);
  }, []);

  return (
    <div className="tenzies__content">
      <h2 className="tenzies__title">Tenzies</h2>
      <p className="tenzies__rules">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <button onClick={() => renderScreen("game")} className="tenzies__button">
        Start Game
      </button>
      <button
        onClick={() => renderScreen("leader")}
        className="tenzies__button"
      >
        Leaderboard
      </button>
    </div>
  );
}
