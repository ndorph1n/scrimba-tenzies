import { nanoid } from "nanoid";
import { useRef } from "react";

export default function Die({ value, isHeld, holdDice }) {
  const combination = useRef({
    1: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    2: [
      [0, 0, 1],
      [0, 0, 0],
      [1, 0, 0],
    ],
    3: [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    4: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
    5: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
    6: [
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
    ],
  });

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  function drawDie(val) {
    const dieValue = combination.current[val];
    const dieFace = [];
    for (let i = 0; i < dieValue.length; i++) {
      for (let j = 0; j < dieValue[i].length; j++) {
        dieValue[i][j] === 1
          ? dieFace.push(
              <span className="die__area" key={nanoid()}>
                •
              </span>
            )
          : dieFace.push(<span className="die__area" key={nanoid()}></span>);
      }
    }
    return dieFace;
  }

  return (
    <div className="die" style={styles} onClick={holdDice}>
      {drawDie(value)}
    </div>
  );
}
