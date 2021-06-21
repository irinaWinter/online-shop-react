import React, { Component } from "react";
import "./index.scss";

export default class CartItem extends Component {
  render() {
    const {
      name,
      img,
      price,
      isFavorite,
      rating,
      deleteFromCart,
      onToggleIsFavorite,
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
        <p className="product__price">{price}</p>
        <button
          className="product__button button button--delete"
          onClick={deleteFromCart}
        >
          Удалить
        </button>
      </li>
    );
  }
}
