import React, { Component } from "react";
import "./index.scss";
import cartIcon from "../../assets/img/icon/cart.svg";
import isFavoriteIcon from "../../assets/img/icon/is-favorite.svg";

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
      <li className="product">
        <div className="product__info-box">
          <p className="product__rating">
            Рейтинг:
            {(rating.reduce((a, b) => a + b) / rating.length).toFixed(1)}
          </p>
          <button
            className={classNames}
            onClick={onToggleIsFavorite}
            style={{
              WebkitMaskImage: `url(${isFavoriteIcon})`,
            }}
          ></button>
        </div>
        <p className="product__name">{name}</p>
        <img className="product__img" src={img} alt={name} />
        <p className="product__price">{price} ₽</p>
        <button
          className="product__button button button--cart"
          onClick={addToCart}
          disabled={inCart}
          style={{ backgroundImage: `url(${cartIcon})` }}
        >
          {inCart ? "В корзине" : "Купить"}
        </button>
      </li>
    );
  }
}
