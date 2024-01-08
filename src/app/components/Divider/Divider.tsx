interface DividerProps {
  height: number;
  color: "gray" | "black" | "red" | "blue" | "green";
}

const Divider = ({ height, color }: DividerProps) => {
  const borderString = `1px solid ${color}`;
  const heightString = `${height}px`;

  return (
    <div
      style={{ border: borderString, height: heightString, width: "0" }}
    ></div>
  );
};

export { Divider };
