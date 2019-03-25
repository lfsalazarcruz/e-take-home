import React, { Component } from "react";
import axios from "axios";
import "./GifView.css";

class GifView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: props.gifs,
      gif: {},
      gifdata: [],
      gifimage: ""
    };
  }

  componentWillMount() {
    const gif = this.state.gifs.find(
      gif => gif.id == this.props.match.params.id
    );
    if (!gif) return;

    this.setState({ gif: gif });

    const endpoint = `http://api.giphy.com/v1/gifs/${
      gif.id
    }?api_key=${REACT_APP_KEY}`;
    axios
      .get(endpoint)
      .then(gif => {
        console.log(gif);
        this.setState({
          gifdata: gif.data.data,
          gifimage: gif.data.data.images.preview_gif.url
        });
        console.log(`this is gif`, this.state.gifdata.id);
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
  }

  render() {
    if (this.state.gifdata) {
      return (
        <div className="gif-title">
          <h1 className="gif-title">{this.state.gifdata.id}</h1>
          <img src={this.state.gifimage} />
        </div>
      );
    } else {
      return <div className="gif-title">No data yet</div>;
    }
  }
}

export default GifView;
