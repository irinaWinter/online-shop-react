import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import products from "./products";

import AppHeader from "./components/AppHeader";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default class App extends Component {
  maxId = 100;

  state = {
    products,
    request: "",
  };

  deleteFromCart = (id) => {
    this.setState(({ products }) => {
      const idx = products.findIndex((el) => el.id === id);

      const oldProduct = products[idx];
      const newProduct = { ...oldProduct, inCart: !oldProduct.inCart };

      const newArray = [
        ...products.slice(0, idx),
        newProduct,
        ...products.slice(idx + 1),
      ];

      return {
        products: newArray,
      };
    });
  };

  addToCart = (id) => {
    this.setState(({ products }) => {
      const idx = products.findIndex((el) => el.id === id);

      const oldProduct = products[idx];
      const newProduct = { ...oldProduct, inCart: !oldProduct.inCart };

      const newArray = [
        ...products.slice(0, idx),
        newProduct,
        ...products.slice(idx + 1),
      ];

      return {
        products: newArray,
      };
    });
  };

  onToggleIsFavorite = (id) => {
    this.setState(({ products }) => {
      const idx = products.findIndex((el) => el.id === id);

      const oldProduct = products[idx];
      const newProduct = { ...oldProduct, isFavorite: !oldProduct.isFavorite };

      const newArray = [
        ...products.slice(0, idx),
        newProduct,
        ...products.slice(idx + 1),
      ];

      return {
        products: newArray,
      };
    });
  };

  onSearchChange = (request) => {
    this.setState({ request });
  };

  search(products, request) {
    if (request.length === 0) {
      return products;
    }

    return products.filter((item) => {
      return item.name.toLowerCase().indexOf(request.toLowerCase()) > -1;
    });
  }

  render() {
    const { products, request } = this.state;

    const visibleProducts = this.search(products, request);

    return (
      <div>
        <Cart
          products={products}
          deleteFromCart={this.deleteFromCart}
          onToggleIsFavorite={this.onToggleIsFavorite}
        />
        <AppHeader onSearchChange={this.onSearchChange} />
        <ProductList
          products={visibleProducts}
          request={request}
          onToggleIsFavorite={this.onToggleIsFavorite}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
