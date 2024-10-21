import { addDoc, onSnapshot } from "firebase/firestore";
import { useScreen } from "./ScreenContext";
import { useEffect } from "react";
import { leadersCollection } from "./firebase";

export default function Leaderboard({ changeScreen }) {
  const { renderScreen, fullOpacity } = useScreen();

  async function addLeader(leader) {
    await addDoc(leadersCollection, leader);

    console.log("data uploading");
  }

  useEffect(() => {
    setTimeout(() => fullOpacity(), 250);
  }, []);
  return (
    <div className="tenzies__content">
      <h2 className="tenzies__title">
        Leaderboard <span className="tenzies__title_small">🏆</span>
      </h2>
      <div className="leaderboard tenzies__leaderboard"></div>
      <button
        onClick={() => {
          addLeader({ position: 1, name: "test", time: 1, steps: 10 });
        }}
      >
        Add leader
      </button>
      <button
        className="return tenzies__return"
        onClick={() => renderScreen("menu")}
      ></button>
    </div>
  );
}
