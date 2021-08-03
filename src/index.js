import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import AppHeader from "./components/AppHeader";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import FakestoreapiService from './services/fakestoreapi-service';
import ProductFilter from "./components/ProductFilter";
import Spinner from "./components/Spinner";

export default class App extends Component {
  fakestoreapiService = new FakestoreapiService();

  state = {
    products: null,
    request: "",
    filter: "",
    details: null,
    loading: true
  };

  componentDidMount() {
    this.loadProducts();
  }

  onProductsLoaded = (products) => {
    this.setState({ products, loading: false })
  }

  loadProducts() {
    this.fakestoreapiService
      .getProducts()
      .then(this.onProductsLoaded)
  }

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
      return item.title.toLowerCase().indexOf(request.toLowerCase()) > -1;
    });
  }

  filter(products, filter) {
    switch (filter) {
      case "men's clothing":
        return products.filter((item) => item.category === "men's clothing");
      case "jewelery":
        return products.filter((item) => item.category === "jewelery");
      case "electronics":
        return products.filter((item) => item.category === "electronics");
      case "women's clothing":
        return products.filter((item) => item.category === "women's clothing");
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
    const { products, request, filter, details, loading } = this.state;

    const visibleProducts = this.filter(this.search(products, request), filter);

    const productList = <React.Fragment>
      <ProductList
        products={visibleProducts}
        request={request}
        showProductDetails={this.showProductDetails}
      />
      <ProductDetails details={details} closeProductDetails={() => this.closeProductDetails()} />
    </React.Fragment>

    const content = loading && !products ?  <Spinner /> : productList;

    return (
      <div>
        <AppHeader onSearchChange={this.onSearchChange} />
        <ProductFilter filter={filter} onFilterChange={this.onFilterChange} />
        {content}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
