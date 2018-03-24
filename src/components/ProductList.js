import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor() {
    super();
    this.state = { isLoading: true, products: [] };
  }

  componentWillMount() {
    fetch("http://localhost:4000/products")
      .then(r => r.json())
      .then(products => this.setState({ isLoading: false, products }));
  }

  renderProducts() {
    return this.state.products.map(p => (
      <ProductListItem product={p} addToCartClick={this.handleAddToCart} />
    ));
  }

  render() {
    return (
      <div className="row products-list">
        {this.state.isLoading && <p>Loading....</p>}
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductList;
