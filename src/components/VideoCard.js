import React from "react";

const VideoCard = ({ name, downloadURL }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <video width="500" height="500" >
        <source src={downloadURL} type="video/mp4" />
      </video>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/video" className="btn btn-primary">
          Play
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
