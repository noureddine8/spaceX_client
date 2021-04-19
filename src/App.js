import React from "react";
import Launches from "./components/Launches";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: 40,
          fontFamily: "sans-serif",
        }}
      >
        Launches
      </h1>

      <Launches />
    </>
  );
}

export default App;
