import React from "react";

import Product from "../Product";

import "./index.scss";

const ProductList = ({ products }) => {
  const product = products.map((product) => {
    return <Product {...product} />;
  });

  return (
    <header className="product-list">
      <div className="product-list__container container">
        <div className="product-list__heading-box heading-box">
          <h2 className="heading-box__heading heading heading--2">
            Отборные овощи и фрукты
          </h2>
          <button className="heading-box__link link">
            Смотреть все товары
          </button>
        </div>
        <ul className="product-list__list">{product}</ul>
      </div>
    </header>
  );
};

export default ProductList;
