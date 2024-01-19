interface DividerProps {
  height?: number;
  width?: number;
  color: "gray" | "black" | "red" | "blue" | "green";
}

const Divider = ({ height, width, color }: DividerProps) => {
  const borderString = `1px solid ${color}`;
  const heightString = `${height}px`;
  const widthString = `${width}px`;

  return (
    <div
      style={{ border: borderString, height: heightString, width: widthString }}
    />
  );
};

export { Divider };
