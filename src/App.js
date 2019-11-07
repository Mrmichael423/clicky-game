import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Index";
import Card from "./components/Cards/Index";
import xmen from "./xmen.json";
import Score from "./components/Nav/Index";

class App extends Component {
  state = {
    xmen: xmen,
    score: 0,
    highscore: 0,
    clicked: []
  };

  handleClick = id => {
    let clicked = this.state.clicked;

    if (clicked.includes(id)) {
      alert("Better luck next time!");
      this.setState({ clicked: [], score: 0 });
      return;
    } else {
      clicked.push(id);

      if (clicked.length === 12) {
        alert("You Win! I can't believe you have that kind of memory");
        this.setState({
          score: 0,
          clicked: []
        });
      }
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score });
      }
      this.setState({
        xmen,
        clicked,
        score: clicked.length
      });

      this.state.xmen.sort(() => Math.random() - 0.5);
      return true;
    }
  };

  render() {
    return (
      <>
        <Score score={this.state.score} highscore={this.state.highscore} />
        <Wrapper>
          {this.state.xmen.map(xmen => (
            <Card
              id={xmen.id}
              key={xmen.id}
              image={xmen.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
