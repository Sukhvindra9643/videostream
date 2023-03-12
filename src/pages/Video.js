import React,{useState} from "react";
import DropFileInput from "../components/DropFileInput"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";
const storage = getStorage(app);

const Video = ()=>{
  const [file,setFile]=useState(null)
  const onFileChange = (file)=>{
    const currentFile = file[0];
    setFile(currentFile);
    console.log(file);
  }
  const handleClick = ()=>{
    if(file === null) return;
    const storageRef = ref(storage, `video/${file.name}.mp4`);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error)
    // Handle unsuccessful uploads
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  }

  return (
    <div className="box">
    <h2 className="header">Drop files input</h2>
    <DropFileInput onFileChange={(file)=>onFileChange(file)}/>
    <br></br>
    <input type="submit" onClick={()=>handleClick()} value="Upload"/>
    </div>
    )
}

export default Video;