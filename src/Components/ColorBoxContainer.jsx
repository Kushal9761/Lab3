import ColorBox from "./ColorBox";
import { colors } from "../data/data";
import { useState } from "react";

export default function ColorBoxContainer() {
  const [colorGrid, setColorGrid] = useState(
    Array(25)
      .fill(null)
      .map(() => colors[Math.floor(Math.random() * colors.length)])
  );

  const handleClick = (index) => {
    const newColorGrid = [...colorGrid];
    newColorGrid[index] = colors[Math.floor(Math.random() * colors.length)];
    setColorGrid(newColorGrid);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "5px",
          padding: "20px",
          backgroundColor: "#333",
          border: "5px solid gray",
        }}
      >
        {colorGrid.map((color, index) => (
          <ColorBox
            key={index}
            color={color}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
