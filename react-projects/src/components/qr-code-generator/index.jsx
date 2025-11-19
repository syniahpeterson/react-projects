import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

// QR Code Generator - Create QR codes from text input
const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  // Generate QR code from input text
  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div id="qr-wrapper">
      <h2>QR Code Generator</h2>

      {/* Input and generate button */}
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>

      {/* QR code display */}
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
};
export default QRGenerator;
