import React, { Component } from "react";

const GifsContainer = props => {
  return (
    <div className="gifs-container">
      <li className="gif-card">
        {props.gifs.map(data => (
          <div>
            <h1>{data.title}</h1>
            <img
              src={data.images.preview_gif.url}
              width="200px"
              height="200px"
            />
          </div>
        ))}
      </li>
    </div>
  );
};

export default GifsContainer;
