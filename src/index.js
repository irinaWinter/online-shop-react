import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import products from "./products";

import AppHeader from "./components/AppHeader";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";


export default class App extends Component {
  maxId = 100;

  state = {
    products,
    request: "",
    filter: "",
    details: null,
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

  onFilterChange = (filter) => {
    if (filter === this.state.filter) {
      this.setState(() => {
        const all = "";
        return {
          filter: all,
        };
      });
    } else {
      this.setState({ filter });
    }
  };

  search(products, request) {
    if (request.length === 0) {
      return products;
    }

    return products.filter((item) => {
      return item.name.toLowerCase().indexOf(request.toLowerCase()) > -1;
    });
  }

  filter(products, filter) {
    switch (filter) {
      case "фрукты":
        return products.filter((item) => item.category === "фрукты");
      case "овощи":
        return products.filter((item) => item.category === "овощи");
      case "ягоды":
        return products.filter((item) => item.category === "ягоды");
      case "грибы":
        return products.filter((item) => item.category === "грибы");
      default:
        return products;
    }
  }

  showProductDetails = (id) => {
    this.setState(({ products }) => {
      const idx = products.findIndex((el) => el.id === id);

      return {
        details: products[idx],
      };
    });
  };

  closeProductDetails() {
    this.setState(() => {
      return {
        details: null,
      };
    });
  }

  render() {
    const { products, request, filter, details } = this.state;

    const visibleProducts = this.filter(this.search(products, request), filter);

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
          filter={filter}
          onFilterChange={this.onFilterChange}
          showProductDetails={this.showProductDetails}
        />
        <ProductDetails details={details} closeProductDetails={() => this.closeProductDetails()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
