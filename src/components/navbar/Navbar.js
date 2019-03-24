import React, { Component } from "react";
import "./Navbar.css";
import Searchbar from "./searchbar/Searchbar";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-inner-container">
          {/* <h3 className="navbar-subtitle">welcome to </h3> */}
          <h1 className="navbar-title">Gifr</h1>
          <Searchbar />
        </div>
        <div className="navbar-divider" />
      </div>
    );
  }
}

export default Navbar;
