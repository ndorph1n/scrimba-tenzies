import React, { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import { ScreenContext } from "./components/ScreenContext";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("menu");

  const renderScreen = (screen) => {
    setActiveScreen(screen);
  };

  const fullOpacity = () => {
    const content = document.querySelector(".tenzies__content");
    content.style.opacity = 100;
  };

  return (
    <main className="main">
      <section className="tenzies main__tenzies">
        <ScreenContext.Provider value={{ renderScreen, fullOpacity }}>
          {activeScreen === "menu" && <Menu />}
          {activeScreen === "game" && <Game />}
          {activeScreen === "leader" && <Leaderboard />}
        </ScreenContext.Provider>
      </section>
    </main>
  );
}
