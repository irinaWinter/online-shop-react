import React, { Component } from "react";
import "./index.scss";

export default class ProductFilter extends Component {
  buttons = [
    { name: "men's clothing", label: "Мужская одежда" },
    { name: "jewelery", label: "Украшения" },
    { name: "electronics", label: "Электроника" },
    { name: "women's clothing", label: "Женская одежда" },
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

    return (
      <section className="product-filter">
        <div className="product-filter__container container">
          <h2 className="visually-hidden">Фильтры</h2>
          <ul className="product-filter__list">{buttons}</ul>
        </div>
      </section>
    )
    
  }
}
