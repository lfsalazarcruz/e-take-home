import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GifsContainer from "./components/gifscontainer/GifsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GifsContainer />
      </div>
    );
  }
}

export default App;
