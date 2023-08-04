//this 1

import { Component } from "react";

class Binding extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
   this.setState({
    count:this.state.count+1
   });
  }
  render() {
    return (
      <div>
        <h3>Binding process check The Count is : {this.state.count}</h3>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default Binding;


