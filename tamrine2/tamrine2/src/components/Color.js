import React, { Component } from "react";

class Color extends Component {
  render() {
    let style = {
      backgroundColor: this.props.colorCode,
    };
    return (
      <div className="showColor" style={style}>
        {this.props.colorCode}
      </div>
    );
  }
}

export default Color;
