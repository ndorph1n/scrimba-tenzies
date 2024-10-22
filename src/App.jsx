import { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { ScreenContext } from "./components/ScreenContext";
import ReactConfetti from "react-confetti";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("menu");
  const [tenzies, setTenzies] = useState(false);

  const renderScreen = (screen) => {
    setActiveScreen(screen);
  };

  const fullOpacity = () => {
    const content = document.querySelector(".tenzies__content");
    content.style.opacity = 100;
  };

  const handleEndGame = (value) => {
    setTenzies(value);
  };

  return (
    <main className="main">
      {tenzies && <ReactConfetti />}
      <section className="tenzies main__tenzies">
        <ScreenContext.Provider value={{ renderScreen, fullOpacity }}>
          {activeScreen === "menu" && <Menu />}
          {activeScreen === "game" && (
            <Game tenzies={tenzies} handleEndGame={handleEndGame} />
          )}
          {activeScreen === "leader" && <Leaderboard />}
        </ScreenContext.Provider>
      </section>
    </main>
  );
}
