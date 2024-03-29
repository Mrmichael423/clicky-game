import React from "react";
import "./style.css";

const Card = props => {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="X-Men"
          src={props.image}
          onClick={() => props.handleClick(props.id)}
        />
      </div>
    </div>
  );
};

export default Card;
