import { useEffect, useState } from "react";
import "./styles.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

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
      <div className="container" style={{ backgroundColor: color }}>
        <div className="button-group">
          <button onClick={() => setTypeOfColor("hex")}>
            Create Hex Color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>
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
          <h3
            style={{
              fontSize: "clamp(1.2rem, 4vw, 2.5rem)",
              margin: "0.5rem 0",
              fontWeight: "bold",
            }}
          >
            {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
          </h3>
          <h4
            style={{
              fontSize: "clamp(1rem, 3vw, 2rem)",
              margin: "0.5rem 0",
              fontWeight: "normal",
              wordBreak: "break-all",
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
