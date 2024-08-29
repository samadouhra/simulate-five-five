import { useEffect, useState } from "react";
import "./App.css";

import Grid from "./components/Grid/Grid";
import Control from "./components/Control/Control";
import { Direction } from "./types";
import { movementVectors } from "./helpers";

export const DIRECTIONS = ["up", "left", "down", "right"];

export const keyMapper: Record<string, Direction> = {
  ArrowUp: "UP",
  ArrowRight: "RIGHT",
  ArrowDown: "DOWN",
  ArrowLeft: "LEFT",
};

const UPPER_BOUND = 4;
const LOWER_BOUND = 0;

export function moveTo(
  direction: Direction,
  currentPos: { x: number; y: number }
): { x: number; y: number } {
  const transform = movementVectors[direction];
  const newPos = transform(currentPos);

  if (
    Object.values(newPos).some((pos) => pos > UPPER_BOUND || pos < LOWER_BOUND)
  )
    return currentPos;

  return newPos;
}

const App = () => {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [currentDirection, setCurrentDirection] = useState<Direction>("RIGHT");

  const performMove = (): void => {
    const newPos = moveTo(currentDirection, currentPosition);
    setCurrentPosition(newPos);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      const newDirection = keyMapper[event.key];
      if (!newDirection) return;

      if (newDirection !== currentDirection)
        return setCurrentDirection(newDirection);

      performMove();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentDirection, currentPosition]);

  const handleBoxClick = (newPosition: { x: number; y: number }): void => {
    setCurrentPosition(newPosition);
  };
  const handleControlClick = (direction: Direction) => {
    if (direction === currentDirection) {
      performMove();
    } else {
      setCurrentDirection(direction);
    }
  };

  return (
    <div className="App">
      <h1>Robot Simulator</h1>
      <Grid
        currentPos={currentPosition}
        handleBoxClick={handleBoxClick}
        currentDirection={currentDirection}
      />
      <Control handleControlClick={handleControlClick} />
    </div>
  );
};

export default App;
