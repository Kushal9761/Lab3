import ColorBoxContainer from "./Components/ColorBoxContainer";

export default function App() {
  return (
    <>
      <h1>Color Changing Box! Try It.</h1>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ColorBoxContainer />
      </div>
    </>
  );
}
