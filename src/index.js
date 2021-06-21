import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import products from "./products";

import AppHeader from "./components/AppHeader";
import ProductList from "./components/ProductList";
import ProductFilter from "./components/ProductFilter";
import Cart from "./components/Cart";

export default class App extends Component {
  maxId = 100;

  state = {
    products,
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

  render() {
    return (
      <div>
        <AppHeader />
        <Cart
          products={this.state.products}
          deleteFromCart={this.deleteFromCart}
          onToggleIsFavorite={this.onToggleIsFavorite}
        />
        <ProductFilter />
        <ProductList
          products={this.state.products}
          onToggleIsFavorite={this.onToggleIsFavorite}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
