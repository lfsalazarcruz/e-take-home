import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GifsContainer from "./components/gifscontainer/GifsContainer";

class App extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=20`;

    axios
      .get(endpoint)
      .then(gifs => {
        console.log(gifs);
        this.setState({
          gifs: gifs.data.data
        });
        console.log("this are the gifs: ", this.state.gifs);
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <GifsContainer gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
