import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GifsContainer from "./components/gifscontainer/GifsContainer";
import GifView from "./components/gifview/GifView";

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

        <Route
          exact
          path="/"
          render={props => <GifsContainer {...props} gifs={this.state.gifs} />}
        />
        <Route
          exact
          path="/view-gif/:id"
          render={props => <GifView {...props} gifs={this.state.gifs} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
