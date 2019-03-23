import React from "react";
import "./GifsContainer.css";

const GifsContainer = props => {
  return (
    <div className="gifs-container">
      <div className="gifs-innercontainer">
        {props.gifs.map(data => (
          <div className="gif-card">
            {/* <h1>{data.title}</h1> */}
            <img
              src={data.images.preview_gif.url}
              width="200px"
              height="200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifsContainer;
