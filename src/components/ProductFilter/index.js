import React, { Component, useLayoutEffect } from "react";
import "./index.scss";

export default class ProductFilter extends Component {
  render() {
    return (
      <ul className="product-filter container">
        <li className="product-filter__item">
          <button className="product-filter__button">Овощи</button>
        </li>
        <li className="product-filter__item">
          <button className="product-filter__button">Фрукты</button>
        </li>
        <li className="product-filter__item">
          <button className="product-filter__button">Ягоды</button>
        </li>
        <li className="product-filter__item">
          <button className="product-filter__button">Грибы</button>
        </li>
        <li className="product-filter__item">
          <button className="product-filter__button">Очистить</button>
        </li>
      </ul>
    );
  }
}
