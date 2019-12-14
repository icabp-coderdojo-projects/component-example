import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
    this.click = this.click.bind(this); // Allows click access to this when called by the button
  }
  otherRender(index) {
    switch (index) {
      case 1:
        return <h1>Page 1 boiii</h1>;
      case 2:
        return (
          <div>
            <p>Lorem ipsum</p>
          </div>
        );
      default:
        return <b>NOOOB</b>;
    }
  }
  click() {
    let state = this.state.index + 1;
    if (this.props.noLorem && state == 2) {
      state = 3;
    }
    this.setState({ index: state });
  }
  render() {
    return (
      <div>
        <h2>{this.props.title ? this.props.title : "No title passed"}</h2>
        <button onClick={this.click}>CLIKK PLS</button>
        <br></br>
        {this.otherRender(this.state.index)}
      </div>
    );
  }
}
