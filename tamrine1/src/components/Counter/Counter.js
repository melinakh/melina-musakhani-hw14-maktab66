import React from "react";
import { Component } from "react";
import Button from "../Button/Button";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrease() {
    if (this.state.counter == 0) {
      this.state.counter = 0;
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }
  render() {
    return (
      <div>
        <p className="counter">{this.state.counter}</p>
        <div className="parent-btn">
          <Button title={"Increase"} clickHandler={this.increase} />
          <Button title={"Decrease"} clickHandler={this.decrease} />
        </div>
      </div>
    );
  }
}
export default Counter;
