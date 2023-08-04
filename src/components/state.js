import { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  clickHandler() {
   this.setState({
    count:this.state.count+1
   });
  }
  render() {
    return (
      <div>
        <h3>The Count is : {this.state.count}</h3>
        <button onClick={()=>{this.clickHandler()}}>click</button>
      </div>
    );
  }
}

export default State;
