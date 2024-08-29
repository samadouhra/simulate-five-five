import { Direction } from "../types";

export const getArrowDirectionStyles = (
  direction: Direction
): { [key: string]: string } => {
  switch (direction) {
    case "LEFT":
      return {
        position: "absolute",
        left: "-20px",
        top: "50%",
        transform: "translateY(-50%) rotate(180deg)",
      };
    case "UP":
      return {
        position: "absolute",
        top: "-20px",
        left: "50%",
        transform: "translateX(-50%) rotate(-90deg)",
      };
    case "RIGHT":
      return {
        position: "absolute",
        right: "-20px",
        top: "50%",
        transform: "translateY(-50%) rotate(0deg)",
      };
    case "DOWN":
      return {
        position: "absolute",
        bottom: "-20px",
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)",
      };
    default:
      return {};
  }
};

export const movementVectors = {
  UP: ({ x, y }: { x: number; y: number }): { x: number; y: number } => ({
    x: x - 1,
    y,
  }),
  RIGHT: ({ x, y }: { x: number; y: number }): { x: number; y: number } => ({
    x,
    y: y + 1,
  }),
  DOWN: ({ x, y }: { x: number; y: number }): { x: number; y: number } => ({
    x: x + 1,
    y,
  }),
  LEFT: ({ x, y }: { x: number; y: number }): { x: number; y: number } => ({
    x,
    y: y - 1,
  }),
};
