import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./searchbar/Searchbar";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-inner-container">
          {/* <h3 className="navbar-subtitle">welcome to </h3> */}
          <Link style={{ textDecoration: "none", color: "white" }} to={`/`}>
            <h1 className="navbar-title">Gifr</h1>
          </Link>
          <Searchbar />
        </div>
        <div className="navbar-divider" />
      </div>
    );
  }
}

export default Navbar;
