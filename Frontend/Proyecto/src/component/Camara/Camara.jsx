import React, { useRef } from "react";
import Webcam from "react-webcam";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    download(imageSrc, "foto.jpg");
  };

  const download = (data, filename) => {
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(
      new Blob([data], { type: "image/jpg" })
    );
    a.download = filename;
    a.click();
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpg" />
      <button className="button" onClick={capture}>
        <PhotoCameraIcon></PhotoCameraIcon>Tomar Foto
      </button>
    </div>
  );
};

export default WebcamCapture;
