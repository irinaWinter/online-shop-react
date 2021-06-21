import React, { Component } from "react";
import "./index.scss";

export default class Product extends Component {
  render() {
    const {
      name,
      img,
      price,
      rating,
      onToggleIsFavorite,
      isFavorite,
      addToCart,
      inCart,
    } = this.props;

    let classNames = "product__is-favorite";
    if (isFavorite) {
      classNames += " product__is-favorite--true";
    }

    return (
      <li className="product-list__product product">
        <div className="product__info-box">
          <p className="product__rating">
            Рейтинг:
            {(rating.reduce((a, b) => a + b) / rating.length).toFixed(1)}
          </p>
          <button className={classNames} onClick={onToggleIsFavorite}>
            Фаворите
          </button>
        </div>
        <p className="product__name">{name}</p>
        <img className="product__img" src={img} alt={name} />
        <p className="product__price">{price} ₽</p>
        <button
          className="product__button button button--cart"
          onClick={addToCart}
          disabled={inCart}
        >
          {inCart ? "В корзине" : "Купить"}
        </button>
      </li>
    );
  }
}
