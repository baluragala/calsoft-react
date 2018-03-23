import React from "react";
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: "" };
    setInterval(() => {
      this.setState({ time: new Date().toTimeString() });
    });
  }
  render() {
    return <h1>{this.state.time}</h1>;
  }
}

export default Timer;
