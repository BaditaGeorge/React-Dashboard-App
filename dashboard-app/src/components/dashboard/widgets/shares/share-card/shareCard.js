import React from "react";
import "./shareCard.scss";

function ShareCard(props) {
  return (
    <>
      <div style={{backgroundColor:props.cIndex === props.index?'#F8F8F8':'white'}} onClick={props.click} className="card">
        <div className="cardtog">
          <p className="sym">{props.name}</p>
          <p className="prc">{props.price}$</p>
        </div>
        <p className="dir" style={{ color:props.dir<0?'red':'green' }}>
          {props.dir<0?props.dir:('+'+props.dir)}%
        </p>
      </div>
    </>
  );
}

export default ShareCard;
