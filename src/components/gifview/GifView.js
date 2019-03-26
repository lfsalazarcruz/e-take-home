import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GifView.css";

const REACT_APP_KEY = "PRVX7etZ3mUpVNhRL1yBaAd32YkjNXQD";

class GifView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: props.gifs,
      gif: {},
      gifdata: [],
      gifimage: "",
      gifusername: "",
      giftitle: "",
      gifrating: "",
      gifurl: ""
    };
  }

  componentWillMount() {
    const gif = this.state.gifs.find(
      gif => gif.id == this.props.match.params.id
    );
    if (!gif) return;

    this.setState({ gif: gif });

    const endpoint = `https://api.giphy.com/v1/gifs/${
      gif.id
    }?api_key=${REACT_APP_KEY}`;
    axios
      .get(endpoint)
      .then(gif => {
        console.log(gif);
        this.setState({
          gifdata: gif.data.data,
          gifimage: gif.data.data.images.preview_gif.url,
          gifusername: gif.data.data.username,
          giftitle: gif.data.data.title,
          gifrating: gif.data.data.rating,
          gifurl: gif.data.data.url
        });
        console.log(`this is gif`, this.state.gifdata.username);
      })
      .catch(error => {
        console.error("Server Error: ", error);
      });
  }

  render() {
    let { gifusername } = this.state;

    if (this.state.gifdata) {
      return (
        <div className="gif-view-container">
          <div className="gif-view-card">
            <div className="gif-view-item">
              <img
                src={this.state.gifimage}
                // width="400px"
                // height="400px"
                role="presentation"
                className="gif-image"
              />
            </div>
            <div className="gif-view-item">
              <h2 className="gif-view-title">{this.state.giftitle}</h2>
              <a
                className="gif-view-url"
                href={this.state.gifurl}
                target="_blank"
              >
                Source: {this.state.gifurl}
              </a>
              <div>
                {gifusername ? (
                  <h3 className="gif-view-username">
                    Created by: {gifusername}
                  </h3>
                ) : (
                  <h3 className="gif-view-username">Created by: unknown</h3>
                )}
              </div>
              <h4 className="gif-view-rating">
                Rating: {this.state.gifrating}
              </h4>
            </div>
          </div>
          <div className="link-container">
            <Link
              style={{ textDecoration: "none" }}
              to={`/`}
              className="gif-view-link"
            >
              Go back!
            </Link>
          </div>
        </div>
      );
    } else {
      return <div className="gif-title">No data yet</div>;
    }
  }
}

export default GifView;
