interface DividerProps {
  height?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  width?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  color: "gray" | "black" | "red" | "blue" | "green";
}

const Divider = ({ height, width, color }: DividerProps) => {
  const borderString = `1px solid ${color}`;
  const heightString = `${height}vh`;
  const widthString = `${width}vw`;

  return (
    <div
      style={{
        border: borderString,
        height: heightString,
        width: widthString,
        backgroundColor: color,
      }}
    />
  );
};

export { Divider };
