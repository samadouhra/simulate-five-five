import React from "react";
import { Direction } from "../../types";
import "./Control.css";

interface ControlsProps {
  handleControlClick: (direction: Direction) => void;
}

const Control: React.FC<ControlsProps> = ({ handleControlClick }) => {
  return (
    <div className="controls">
      <div className="control-row">
        {" "}
        <button
          className="arrow"
          onClick={() => {
            handleControlClick("UP");
          }}
        >
          ⇧
        </button>
      </div>

      <div className="control-row">
        <button className="arrow" onClick={() => handleControlClick("LEFT")}>
          ⇦
        </button>
        <button className="arrow" onClick={() => handleControlClick("DOWN")}>
          ⇩
        </button>
        <button className="arrow" onClick={() => handleControlClick("RIGHT")}>
          ⇨
        </button>
      </div>
      <div>Use the arrow keys on your keyboard to navigate as well.</div>
    </div>
  );
};

export default Control;
