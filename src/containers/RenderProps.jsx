import React, { Component } from "react";

export class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        { this.props.render({ x, y }) }
      </div>
    );
  }
}

export class Parent extends Component {
  render() {
    return (
      <div>
        <Mouse render={ mouse => (
          <div>获得的坐标是{mouse.x} + {mouse.y}</div>
        ) } />
      </div>
    );
  }
}
