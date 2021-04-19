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
      <div
        style={{
          marginLeft: 10,
          width: 200,
          padding: 10,
        }}
      >
        <div style={{ color: "green", padding: 5 }}>
          <i class="fa fa-check fa-lg" aria-hidden="true"></i> : Mission
          succeeded
        </div>
        <div style={{ color: "red", padding: 5 }}>
          <i class="fa fa-times fa-lg" aria-hidden="true"></i> &nbsp;: Mission
          failed
        </div>
      </div>
      <Launches />
    </>
  );
}

export default App;
