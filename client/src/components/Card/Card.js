import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
  
  </div>
);

export default Card;
