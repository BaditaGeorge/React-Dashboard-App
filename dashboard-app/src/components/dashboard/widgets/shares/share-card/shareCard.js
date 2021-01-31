import React from "react";
import "./shareCard.scss";

function ShareCard() {
  return (
    <>
      <div className="card">
        <div className="cardtog">
          <p className="sym">NASDAQ</p>
          <p className="prc">5,055.55</p>
        </div>
        <p className="dir" style={{ color: "red" }}>
          -0.85
        </p>
      </div>
    </>
  );
}

export default ShareCard;
