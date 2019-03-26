import React, { Component } from "react";
import axios from "axios";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GifsContainer from "./components/gifscontainer/GifsContainer";
import GifView from "./components/gifview/GifView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      moregifs: 5
    };
  }

  componentDidMount() {
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=${
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
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${REACT_APP_KEY}&limit=${
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
        console.log("this are the gifs searched: ", this.state.gifs);
      })
      .then(gifs => {
        const endpoint = `http://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=${
          this.state.moregifs
        }`;
        if (this.state.gifs.length < 1) {
          axios.get(endpoint).then(gifs => {
            this.setState({
              gifs: gifs.data.data
            });
          });
        }
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
  };

  moreGifs = () => {
    this.setState({
      moregifs: this.state.moregifs + 5
    });
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=trending&api_key=${REACT_APP_KEY}&limit=${this
      .state.moregifs + 5}`;
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
