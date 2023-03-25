import React, { useState } from "react";
import DropFileInput from "../components/DropFileInput";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";


const storage = getStorage(app);

const UploadVideo = () => {
  const [file, setFile] = useState(null);
  const [progressvalue,setProgressValue] = useState(null)
  const onFileChange = (file) => {
    const currentFile = file[0];
    setFile(currentFile);
  };
  const uploadUrl = async(downloadURL)=>{
    const {name} = file;
    console.log(downloadURL)
    const res = await fetch("https://videostream-e6f9a-default-rtdb.firebaseio.com/videos.json",
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        downloadURL
      })
    }
    );
    console.log(res)
  }
  const handleClick = () => {
    if (file === null) return;
    const storageRef = ref(storage, `video/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressValue(Math.floor(progress))
        console.log("Upload is " + Math.floor(progress) + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("waiting")
        }
      },
      (error) => {
        console.log(error);
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          uploadUrl(downloadURL)
        });
      }
      );
      
  };
let window_width = window.innerWidth
  return (
    <div className="box">
      <h2 className="header">Drop files input</h2>
      <DropFileInput onFileChange={(file) => onFileChange(file)} />
      <br></br>
      <div className="progress" style={window_width <= 600 ? {display: `${progressvalue === null?"none":"block"}`,marginBottom:"20px",width:"95vw"}:{display: `${progressvalue === null?"none":"block"}`,marginBottom:"20px",width:"22vw"}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: `${progressvalue}%`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progressvalue}
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        style={window_width <= 600 ? {width:"95vw"}:{width:"22vw"}}
        onClick={() => handleClick()}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadVideo;
