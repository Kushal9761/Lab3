export default function ColorBox({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: color,
        border: "2px solid black",
      }}
    ></div>
  );
}
