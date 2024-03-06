import { useEffect, useState, useCallback } from "react";
import styles from "./RP_RandomColor.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const RP_RandomColor = () => {
  const isDesktop = useMediaQuery("(min-width: 1048px)");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = useCallback((length: number) => {
    return Math.floor(Math.random() * length);
  }, []);

  const handleCreateRandomHexColor = useCallback(() => {
    const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }, [randomColorUtility, setColor]);

  const handleCreateRandomRgbColor = useCallback(() => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }, [randomColorUtility, setColor]);

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor, handleCreateRandomHexColor, handleCreateRandomRgbColor]);

  return (
    <>
      <h2 className={styles.header}>Random Color Generator</h2>
      <div
        className={styles.container}
        style={{
          width: "100vw",
          height: "50vh",
          background: color,
        }}
      >
        <button
          onClick={() => setTypeOfColor("hex")}
          style={{
            border:
              typeOfColor === "hex" ? "2px dashed crimson" : "1px solid black",
            fontSize: isDesktop ? "18px" : "12px",
          }}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          style={{
            border:
              typeOfColor === "rgb" ? "2px dashed crimson" : "1px solid black",
            fontSize: isDesktop ? "18px" : "12px",
          }}
        >
          Create RGB
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          style={{
            border: "1px solid black",
            fontSize: isDesktop ? "18px" : "12px",
          }}
        >
          Generate New Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            color: "#fff",
            fontSize: isDesktop ? "60px" : "24px",
            marginTop: "60px",
            marginBottom: "30px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h2>{color}</h2>
        </div>
      </div>
    </>
  );
};

export { RP_RandomColor };
