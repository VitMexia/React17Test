import React from "react";
// import Display from "./Display";
// import ButtonPanel from "./ButtonPanel";
// import calculate from "../logic/calculate";
// import "./App.css";
import "./css/bootstrap.min.css"

export default class App extends React.Component {
  
  state = {
    total: null,
    next: null,
    operation: null,
  };

  // handleClick = buttonName => {
  //   this.setState(calculate(this.state, buttonName));
  // };

  render() {
    return (
      // <div class="container">
      //   <div  style={{height: "100%", width: "90%" }}>
      //   HELLO WORLD
      //   </div>
      //   {/* <Display value={this.state.next || this.state.total || "0"} />
      //   <ButtonPanel clickHandler={this.handleClick} /> */}
      // </div>

      //<div style={{height: "vh-100", backgroundcolor: "rgba(255,0,0,.1)"}}>
      <div class="container vh-100">
        <div class="mh-100 mt-3 border border-warning" style={{width: '90%', height: '90%', backgroundcolor: 'rgba(0,0,255,.1)'}}>Max-height 100%</div>
      </div>
    );
  }
}