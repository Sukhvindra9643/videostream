import React from "react";
import { useParams,useLocation } from "react-router-dom";
const VideoDetails = () => {
    const {id} = useParams();
    const location = useLocation();
  return (
    <div style={{width:"1000px",height:"600px"}}>
      <video width="1000" height="600" controls>
        <source
          src={`https://firebasestorage.googleapis.com/v0/b/videostream-e6f9a.appspot.com/o/video%2F${id}${location.search}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoDetails;
