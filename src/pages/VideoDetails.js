import React,{useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Videos.css"

function VideoDetails() {
  const { id } = useParams();
  const location = useLocation();
  let width = window.innerWidth;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return( 
    <div className="videoDetails">
    <video src={`https://firebasestorage.googleapis.com/v0/b/videostream-e6f9a.appspot.com/o/video%2F${id}${location.search}`} controls width={`${width <= 600 ? "99%" : "100%"}`}
    height={`${width <= 600 ? "250px" : "600px"}`} className="video"></video>
    </div>
    )
}
export default VideoDetails;
