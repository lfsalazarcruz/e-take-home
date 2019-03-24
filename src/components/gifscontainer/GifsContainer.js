import React from "react";
import "./GifsContainer.css";

const GifsContainer = props => {
  return (
    <div className="gifs-container">
      <div className="gifs-innercontainer">
        {props.gifs.map(data => (
          <div className="gif-card">
            <img
              src={data.images.preview_gif.url}
              width="200px"
              height="200px"
            />
            <div className="gif-hover-container">
              <h5 className="gif-title">{data.title}</h5>
              <a className="gif-link">
                <p>See more</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifsContainer;
