import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Index";
import Card from "./components/Cards/Index";
import xmen from "./xmen.json";
import Score from "./components/Nav/Index";

class App extends Component {
  state = {
    xmen: xmen,
    score: 0,
    highscore: 12,
    clicked: []
  };

  render() {
    return (
      <>
        <Score score={this.state.Score} highscore={this.state.highscore} />
        <Wrapper>
          {this.state.xmen.map(xmen => (
            <Card id={xmen.id} key={xmen.id} image={xmen.image} />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
