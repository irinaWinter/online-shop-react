import React, { Component } from "react";
import "./index.scss";

export default class ProductFilter extends Component {
  buttons = [
    { name: "овощи", label: "Овощи" },
    { name: "фрукты", label: "Фрукты" },
    { name: "ягоды", label: "Ягоды" },
    { name: "грибы", label: "Грибы" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "product-filter__button--active" : "";
      return (
        <li className="product-filter__item" key={name}>
          <button
            className={`product-filter__button ${clazz}`}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        </li>
      );
    });

    return <ul className="product-filter">{buttons}</ul>;
  }
}
