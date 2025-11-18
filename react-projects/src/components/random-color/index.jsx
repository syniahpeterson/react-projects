import { useEffect, useState } from "react";
import "./styles.css";

// Random Color Generator - Creates HEX and RGB colors with live preview
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Generate random number utility
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  // Generate random HEX color (#RRGGBB)
  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  // Generate random RGB color (0-255 values)
  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  // Auto-generate color when mode changes (BUG: missing function calls)
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor;
    } else {
      handleCreateRandomHexColor;
    }
  }, [typeOfColor]);
  return (
    <div id="wrapper">
      <h2>Random Color Generator</h2>

      {/* Main container with dynamic background color from state */}
      <div className="container" style={{ backgroundColor: color }}>
        {/* Control buttons for color mode and generation */}
        <div className="button-group">
          {/* Set color mode to HEX */}
          <button onClick={() => setTypeOfColor("hex")}>
            Create Hex Color
          </button>

          {/* Set color mode to RGB */}
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>

          {/* Generate new color based on current mode */}
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
          >
            Generate Random Color
          </button>
        </div>

        {/* Color display section with responsive text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            marginTop: "20px",
            textAlign: "center",
            padding: "0 10px",
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {/* Color type indicator (HEX/RGB) with responsive font size */}
          <h3
            style={{
              fontSize: "clamp(1.2rem, 4vw, 2.5rem)", // Responsive: 1.2rem to 2.5rem
              margin: "0.5rem 0",
              fontWeight: "bold",
            }}
          >
            {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
          </h3>

          {/* Current color value display with text wrapping */}
          <h4
            style={{
              fontSize: "clamp(1rem, 3vw, 2rem)", // Responsive: 1rem to 2rem
              margin: "0.5rem 0",
              fontWeight: "normal",
              wordBreak: "break-all", // Ensures long color values wrap properly
              maxWidth: "100%",
            }}
          >
            {color}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
