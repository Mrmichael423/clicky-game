import React from "react";

const Score = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <div className="header">
        <h1>X-Men Clicky Game</h1>
        <div className="title">{props.children}</div>
        <div className="scores">
          <h3>Score: {props.score}</h3>
          <h3>Highscore: {props.highscore}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Score;
