import { useScreen } from "./ScreenContext";
import { useEffect } from "react";

export default function Game({ changeScreen }) {
  const { renderScreen, fullOpacity } = useScreen();

  useEffect(() => {
    setTimeout(() => fullOpacity(), 250);
  }, []);
  return (
    <div className="tenzies__content">
      <div className="game-field"></div>
      <button
        className="return tenzies__return"
        onClick={() => renderScreen("menu")}
      ></button>
    </div>
  );
}
