import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/styles.scss";

import products from "./products";

import AppHeader from "./components/AppHeader";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <AppHeader />
      <ProductList products={products} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
