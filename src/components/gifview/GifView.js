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
      gifimage: "",
      gifwidth: "",
      gifheight: "",
      gifusername: "",
      giftitle: "",
      gifrating: ""
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
          gifimage: gif.data.data.images.preview_gif.url,
          gifwidth: gif.data.data.images.preview_gif.width,
          gifheight: gif.data.data.images.preview_gif.height,
          gifusername: gif.data.data.username,
          giftitle: gif.data.data.title,
          gifrating: gif.data.data.rating
        });
        console.log(`this is gif`, this.state.gifdata.username);
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
  }

  render() {
    if (this.state.gifdata) {
      return (
        <div className="gif-view-card">
          <div className="gif-view-item">
            <img
              src={this.state.gifimage}
              width="400px"
              height="400px"
              role="presentation"
            />
          </div>
          <div className="gif-view-item">
            <h2 className="gif-view-title">{this.state.giftitle}</h2>
            <h3 className="gif-view-username">
              Created by: {this.state.gifusername}
            </h3>
            <h4 className="gif-view-rating">Rating: {this.state.gifrating}</h4>
          </div>
        </div>
      );
    } else {
      return <div className="gif-title">No data yet</div>;
    }
  }
}

export default GifView;
