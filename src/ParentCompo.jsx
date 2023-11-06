import React, { Component, createRef } from "react";
import PureCompo from "./PureComponent";

class ParentCompo extends Component {
  constructor() {
    super();
    this.ComponentRef = createRef();
  }
  // handleChangeComponentName = () => {
  //   this.ComponentRef.current.handleChangeName();
  // };
  render() {
    return (
      <div>
        <PureCompo ref={this.ComponentRef} />
        {/* <button
          className="btn btn-info my-3"
          onClick={this.handleChangeComponentName}
        >
          تست
        </button> */}
      </div>
    );
  }
}
export default ParentCompo;
