import React, { Component } from "react";
import "./index.scss";
import Search from "../Search";

export default class AppHeader extends Component {
  render() {
    const { onSearchChange } = this.props;

    return (
      <header className="page-header">
        <div className="page-header__container container">
          <div className="page-header__wrapper">
            <Search onSearchChange={onSearchChange} />
          </div>
        </div>
      </header>
    );
  }
}
