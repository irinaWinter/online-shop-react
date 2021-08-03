import React, { Component } from "react";
import "./index.scss";
import cartIcon from "../../assets/img/icon/cart.svg";

export default class Product extends Component {
  render() {
    const {
      image,
      price,
      title,
      showProductDetails
    } = this.props;

    return (
      <li className="product">
        <p className="product__name">{title}</p>
        <img className="product__img" src={image} alt={title} />
        <button className="product__quick-view quick-view" onClick={showProductDetails}>Быстрый просмотр</button>
        <p className="product__price">{price} ₽</p>
        <button
          className="product__button button button--cart"
          style={{ backgroundImage: `url(${cartIcon})` }}
          disabled
        >
          Купить
        </button>
      </li>
    );
  }
}
