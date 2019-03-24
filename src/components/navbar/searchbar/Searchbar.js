import React, { Component } from "react";
import "./Searchbar.css";

class SearchBar extends Component {
  state = {
    giftitle: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("search for this title: ", this.state.giftitle);
  };

  render() {
    return (
      <form className="searchbar-container">
        <input
          className="search-input"
          placeholder="Look for the best trending GIFs!"
          type="text"
          onChange={this.handleChange}
          name="giftitle"
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
    );
  }
}

export default SearchBar;
