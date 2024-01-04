import React, { useState, useEffect } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function generateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    console.log(r, g, b);
    setColor(`rgb(${r} ${g} ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") generateRandomRgbColor();
    else generateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? generateRandomHexColor
            : generateRandomRgbColor
        }
      >
        Change Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "5px",
          background: color,
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
