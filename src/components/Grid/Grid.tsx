import React, { useEffect, useState } from "react";
import "./Grid.css";
import robotImage from "../../images/robot.png";
import { Direction, Position } from "../../types";
import { getArrowDirectionStyles } from "../../helpers";

const gridSize = 5;

const Grid = ({
  currentPos,
  handleBoxClick,
  currentDirection,
}: {
  currentPos: Position;
  handleBoxClick: (position: Position) => void;
  currentDirection: Direction;
}) => {
  const [rotateClass, setRotateClass] = useState("");

  useEffect(() => {
    const handleDirectionChange = () => {
      setRotateClass("arrow-rotate");
      const timer = setTimeout(() => setRotateClass(""), 500);
      return () => clearTimeout(timer);
    };
    handleDirectionChange();
  }, [currentDirection]);

  const rows = Array.from({ length: gridSize }, (_, rowIndex) => (
    <div key={rowIndex} className="row">
      {Array.from({ length: gridSize }, (_, colIndex) => {
        const isRobotHere =
          currentPos.x === colIndex && currentPos.y === rowIndex;
        return (
          <div
            key={colIndex}
            className={`grid-cell ${isRobotHere ? "robot" : ""}`}
            onClick={() => handleBoxClick({ x: colIndex, y: rowIndex })}
          >
            {isRobotHere && (
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                }}
              >
                <img
                  src={robotImage}
                  alt="Robot"
                  className="robot-icon"
                  width={40}
                  height={40}
                />
                <div
                  className={`arrow-transition ${rotateClass}`}
                  style={{
                    ...getArrowDirectionStyles(currentDirection),
                    fontWeight: 500,
                    fontSize: "21px",
                    padding: 0,
                    pointerEvents: "none",
                  }}
                >
                  ➤
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  ));

  return <div className="grid">{rows}</div>;
};

export default Grid;
