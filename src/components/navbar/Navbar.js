import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
  }

  onInputChange = term => {
    this.setState({ term });
    this.props.onTermChange(term);
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-inner-container">
          <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
            <h1 className="navbar-title">Gifr</h1>
          </Link>
          <form
            className="searchbar-container"
            // onSubmit={event => this.onInputChange(event.target.value)}
          >
            <input
              className="search-input"
              placeholder="Look for the best trending GIFs!"
              type="text"
              onChange={event => this.onInputChange(event.target.value)}
              name="term"
            />
            {/* <button className="search-button" type="submit">
              search
            </button> */}
          </form>
        </div>
        <div className="navbar-divider" />
      </div>
    );
  }
}

export default Navbar;
