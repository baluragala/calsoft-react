import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
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
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:pid" component={ProductDetail} />
          <Route
            path="/login"
            render={props => <Contact {...props} myProp={"test"} />}
          />
          <Route path="/signup" component={About} />
        </Switch>

        <Header
          totalProducts={this.state.cart.totalProducts}
          totalValue={this.state.cart.totalValue}
        />
      </div>
    );
  }
}
