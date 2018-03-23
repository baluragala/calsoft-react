import React, { Component } from "react";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = { name: "" };
    this.refEle = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  }
  handleSubmit(e) {
    console.log(this.refEle);
    this.refEle.value = "submitted";
    e.preventDefault();
  }

  componentWillMount() {
    console.log("componentWillMount", this.refEle);
  }

  componentDidMount() {
    console.log("componentDidMount", this.refEle);
  }

  render() {
    console.log("render", this.refEle);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" ref={e => (this.refEle = e)} />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default AddProduct;
