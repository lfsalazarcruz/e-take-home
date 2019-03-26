import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GifsContainer from "./components/gifscontainer/GifsContainer";
import GifView from "./components/gifview/GifView";

const REACT_APP_KEY = "PRVX7etZ3mUpVNhRL1yBaAd32YkjNXQD";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      moregifs: 5
    };
  }

  componentDidMount() {
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=${
      this.state.moregifs
    }`;

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

  handleTermSearch = term => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${REACT_APP_KEY}&limit=${
      this.state.moregifs
    }`;
    console.log(term);
    axios
      .get(endpoint)
      .then(gifs => {
        console.log(gifs);
        this.setState({
          gifs: gifs.data.data
        });
        console.log("gifs searched: ", this.state.gifs);
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
  };

  moreGifs = () => {
    this.setState({
      moregifs: this.state.moregifs + 3
    });
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=${this
      .state.moregifs + 3}`;
    console.log(this.state.moregifs);
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
  };

  lessGifs = () => {
    if (this.state.moregifs === 1) {
      this.setState({
        moregifs: this.state.moregifs
      });
      console.log(this.state.moregifs);
      alert("STOP! DON'T DO THAT! IT'S THE LAST GIF!!!");
    } else if (this.state.moregifs > 1) {
      this.setState({
        moregifs: this.state.moregifs - 1
      });
      const endpoint = `https://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=${this
        .state.moregifs - 1}`;
      console.log(this.state.moregifs);
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
  };

  render() {
    return (
      <div className="App">
        <Navbar onTermChange={term => this.handleTermSearch(term)} />
        <Route
          exact
          path="/"
          render={props => (
            <GifsContainer
              {...props}
              gifs={this.state.gifs}
              moreGifs={this.moreGifs}
              lessGifs={this.lessGifs}
            />
          )}
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
