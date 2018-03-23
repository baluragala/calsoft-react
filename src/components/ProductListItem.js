import React, { Component } from "react";

class ProductListItem extends Component {
  constructor() {
    super();
    this.state = { qty: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ qty: this.state.qty + 1 });
  }

  decrement() {
    if (this.state.qty > 0) {
      this.setState({ qty: this.state.qty - 1 });
    }
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="each-product">
          <div className="product-image-properties">
            <a href="product-one.html">
              <img src="assets/Samsung1.jpeg" className="images" />
            </a>
          </div>
          <h4 className="product-name">Mobile</h4>
          <p className="product-price">Rs.8,999</p>
          <div className="number-input">
            <a href="#" className="decrement" onClick={this.decrement}>
              –
            </a>
            <input
              type="number"
              className="value-result"
              value={this.state.qty}
              readOnly
            />
            <a href="#" className="increment" onClick={this.increment}>
              +
            </a>
          </div>
          <div className="product-button">
            <button
              type="button"
              className="cart-add-button"
              onClick={() =>
                this.props.addToCartClick({
                  name: "p1",
                  qty: this.state.qty,
                  price: 8999
                })
              }
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
