import React from "react";
import "./dashboard.scss";
import Weather from "./widgets/weather/weather";
import Shares from "./widgets/shares/shares";

function Dashboard() {
  return (
    <>
      <div className="navBar">
        <span style={{ left: "10px" }}>Menu</span>
        <span style={{ right: "10px" }}>X</span>
      </div>
      <div className="holder">
        <div className="upperHalf">
          <div className="left"></div>
          <div className="right">
            <Weather></Weather>
          </div>
        </div>
        <div className="lowerHalf">
          <Shares></Shares>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
