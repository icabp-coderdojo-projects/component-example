import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>example Demo</h1>
        <Example title="sddas" noLorem={true}></Example>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
