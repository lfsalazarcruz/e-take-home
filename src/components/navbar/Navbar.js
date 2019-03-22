import React, { Component } from "react";
import "./Navbar.css";
import Searchbar from "./searchbar/Searchbar";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        {/* <h3 className="navbar-subtitle">welcome to </h3> */}
        <h1 className="navbar-title">GIFR</h1>
        <Searchbar />
      </div>
    );
  }
}

export default Navbar;
