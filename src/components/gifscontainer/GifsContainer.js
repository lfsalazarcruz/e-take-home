import React from "react";
import { Link } from "react-router-dom";
import "./GifsContainer.css";

const GifsContainer = props => {
  return (
    <div className="gifs-container">
      <div className="gifs-innercontainer">
        {props.gifs.map(data => (
          <div className="gif-card" key={data.id}>
            <img
              src={data.images.preview_gif.url}
              width="200px"
              height="200px"
              role="presentation"
            />
            <div className="gif-hover-container">
              <h5 className="gif-title">{data.title}</h5>
              <Link
                style={{ textDecoration: "none" }}
                to={`/view-gif/${data.id}`}
                className="gif-link"
              >
                <p>See more</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="moregifs-container">
        <button className="moregifs-button" onClick={props.moreGifs}>
          +
        </button>
        <button className="moregifs-button" onClick={props.lessGifs}>
          -
        </button>
      </div>
    </div>
  );
};

export default GifsContainer;
