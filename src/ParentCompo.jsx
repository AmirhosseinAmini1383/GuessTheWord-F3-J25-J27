import React, { Component, createRef } from "react";
import Fcomponent from "./Fcomponent";

class ParentCompo extends Component {
  constructor() {
    super();
    this.myInput = createRef();
  }
  componentDidMount() {
    this.myInput.current.focus();
  }
  render() {
    return (
      <div>
        <Fcomponent ref={this.myInput} />
      </div>
    );
  }
}
export default ParentCompo;
