import React, { Component } from "react";
import "./Searchbar.css";

class SearchBar extends Component {
  render() {
    return (
      <form className="searchbar-container">
        <input className="search-input" value="search" type="text" />
        <button className="search-button">search!</button>
      </form>
    );
  }
}

export default SearchBar;
