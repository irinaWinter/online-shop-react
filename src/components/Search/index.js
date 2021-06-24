import React, { Component } from "react";
import "./index.scss";
import loupe from "../../assets/img/icon/loupe.svg";

export default class Search extends Component {
  state = {
    request: "",
  };

  onSearchChange = (evt) => {
    const request = evt.target.value;
    this.setState({ request });
    this.props.onSearchChange(request);
  };

  render() {
    return (
      <input
        className="search__field"
        style={{ backgroundImage: `url(${loupe})` }}
        type="text"
        name="search"
        placeholder="Искать товары"
        onInput={this.onSearchChange}
        value={this.state.request}
      />
    );
  }
}
