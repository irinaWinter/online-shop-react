import React from "react";

import CartItem from "./CartItem";

import "./index.scss";

const Cart = ({ products, deleteFromCart, onToggleIsFavorite, isFavorite }) => {
  const product = products
    .filter((item) => item.inCart)
    .map((product) => {
      return (
        <CartItem
          {...product}
          onToggleIsFavorite={() => onToggleIsFavorite(product.id)}
          deleteFromCart={() => deleteFromCart(product.id)}
          key={product.id}
        />
      );
    });

  return (
    <header className="product-list">
      <div className="product-list__container container">
        <div className="product-list__heading-box heading-box">
          <h2 className="heading-box__heading heading heading--2">
            Корзина{" "}
            <span className="heading-box__count">
              ({products.filter((item) => item.inCart).length})
            </span>
          </h2>
        </div>
        <ul className="product-list__list">{product}</ul>
      </div>
    </header>
  );
};

export default Cart;
