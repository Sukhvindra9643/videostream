import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";

const Videos = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    const startCountRef = ref(db, "videos/");
    onValue(startCountRef, (snapshot) => {
      const data = snapshot.val();
      const newVideos = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(newVideos);
      setVideoData(newVideos);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex gap-2 flex-wrap">
          {videoData.map((video) => (
            <div className="card" style={{width:"24%"}}>
              <video width="100%" height="200">
                <source src={video.downloadURL} type="video/mp4" />
              </video>
              <div className="card-body">
                <h5 className="card-title">{video.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to={`/video/${(video.downloadURL).slice(84)}`} className="btn btn-primary">
                  Play
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Videos;
