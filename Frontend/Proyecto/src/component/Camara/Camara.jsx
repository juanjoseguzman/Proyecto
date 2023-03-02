import React, { useRef } from "react";
import Webcam from "react-webcam";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useState, useEffect } from "react";

function WebcamCapture() {
  const webcamRef = useRef(null);

  const [captureImage, setCaptureImage] = useState(false); //nuevo

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCaptureImage(imageSrc);
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
    <>
      {!captureImage ? (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpg" />
          <button className="button" onClick={capture}>
            <PhotoCameraIcon></PhotoCameraIcon>Tomar Foto
          </button>
        </div>
      ) : (
        <>{captureImage && <img src={captureImage} alt="captured" />}</>
      )}
    </>
  );
}

export default WebcamCapture;
