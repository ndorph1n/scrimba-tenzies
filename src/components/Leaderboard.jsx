import { useScreen } from "./ScreenContext";
import { useEffect, useState } from "react";
import { leadersDocs } from "./firebase";

export default function Leaderboard() {
  const { renderScreen, fullOpacity } = useScreen();
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    setTimeout(() => fullOpacity(), 250);
  }, []);

  useEffect(() => {
    const leadersArr = [];
    leadersDocs.forEach((leader) =>
      leadersArr.push({ ...leader.data(), id: leader.id })
    );
    setLeaders(leadersArr);
  }, []);

  function renderLeaders() {
    if (!leaders) return <p>No records!</p>;
    return (
      <ol className="leaderboard__list">
        {leaders
          .sort((a, b) => a.time - b.time)
          .map((leader) => (
            <li key={leader.id} className="leaderboard__item">
              <span className="leaderboard__name">{leader.name}</span>
              <span className="leaderboard__time">
                {Math.round(leader.time / 1000)}s.
              </span>
            </li>
          ))}
      </ol>
    );
  }

  return (
    <div className="tenzies__content">
      <h2 className="tenzies__title">
        Leaderboard <span className="tenzies__title_small">🏆</span>
      </h2>
      <div className="leaderboard tenzies__leaderboard">
        {renderLeaders()}
        <button></button>
      </div>
      <button
        className="return tenzies__return"
        onClick={() => renderScreen("menu")}
      ></button>
    </div>
  );
}
