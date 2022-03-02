import React, { Component } from "react";
import Color from "./Color";

class Colorgenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
  }

  newColor = () => {
    this.setState({
      colors: [...this.state.colors, this.generateColor()],
    });
  };
  generateColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };

  render() {
    return (
      <div>
        <button onClick={this.newColor}>add color</button>

        {this.state.colors.map((color, index) => (
          <Color colorCode={color} key={index} />
        ))}
      </div>
    );
  }
}

export default Colorgenerator;
