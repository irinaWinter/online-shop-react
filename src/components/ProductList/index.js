import React from "react";

import Product from "../Product";
import NoResults from "../NoResults";
import ProductFilter from "../ProductFilter";

import "./index.scss";

const ProductList = ({
  products,
  onToggleIsFavorite,
  addToCart,
  request,
  filter,
  showProductDetails,
  onFilterChange,
}) => {
  const product = products.map((product) => {
    return (
      <div>
        <Product
          {...product}
          onToggleIsFavorite={() => onToggleIsFavorite(product.id)}
          addToCart={() => addToCart(product.id)}
          key={`${product.id}`}
          showProductDetails={() => showProductDetails(product.id)}
        />
      </div>
    );
  });

  const productList = <ul className="product-list__list">{product}</ul>;

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
        <ProductFilter filter={filter} onFilterChange={onFilterChange} />
        {products.length ? productList : <NoResults request={request} />}
      </div>
    </header>
  );
};

export default ProductList;
