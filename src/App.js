import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductListItem from "./components/ProductListItem";

export class App extends Component {
  constructor() {
    super();
    this.state = { cart: { totalProducts: 10, totalValue: 10000 } };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(product) {
    //state change
    console.log(product);
    this.setState({
      cart: {
        totalProducts: this.state.cart.totalProducts + product.qty,
        totalValue: product.qty * product.price
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          totalProducts={this.state.cart.totalProducts}
          totalValue={this.state.cart.totalValue}
        />
        <div className="row products-list">
          <ProductListItem addToCartClick={this.handleAddToCart} />
        </div>
      </div>
    );
  }
}
