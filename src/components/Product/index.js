import React from "react";

import "./index.scss";

const Product = ({ name, img, price }) => {
  return (
    <li className="product-list__product product" key={`${name}`}>
      <p className="product__name">{name}</p>
      <img className="product__img" src={img} alt={name} />
      <p className="product__price">{price}</p>
      <button className="product__button button button--cart">Купить</button>
    </li>
  );
};

export default Product;
