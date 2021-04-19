import React from "react";

function LaunchItem({ launch }) {
  const { mission_name, launch_year, launch_success } = launch;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: 80,
        backgroundColor: "#000",
        margin: 10,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 8 }}>
        <p style={{ color: "white", fontWeight: "bold", fontSize: 28 }}>
          Mission : {mission_name}
        </p>
      </div>
      <div style={{ flex: 2 }}>
        <h2 style={{ color: "white" }}>{launch_year}</h2>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ color: launch_success ? "green" : "red" }}>
          {launch_success ? (
            <i class="fa fa-check fa-lg" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-times fa-lg" aria-hidden="true"></i>
          )}
        </h3>
      </div>
    </div>
  );
}

export default LaunchItem;
