import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div className="row products-list">
        Product Detail for {this.props.match.params.pid}
        <button onClick={() => this.props.history.go(-1)}>Go Back</button>
      </div>
    );
  }
}

export default ProductDetail;
