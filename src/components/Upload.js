import { useState } from "react";
import { storage } from "../firebase_config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Link } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";

import ProgressBar from "@ramonak/react-progress-bar";

import { v4 } from "uuid";

const Upload = (props) => {
  const [file2upload, setFile2Upload] = useState("");
  const [getUploadedFile, setGetUploadedFile] = useState("");
  const [progress, setProgress] = useState(0);
  const uploadFile = () => {
    if (file2upload == "") {
      Swal.fire("Please select file to upload");
      return;
    }
    const pathname = "/images/"; // Set pathname as wanted.
    const fileRef = ref(storage, pathname + v4() + "_" + file2upload.name);

    const uploadTask = uploadBytesResumable(fileRef, file2upload);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //Check on progress change
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(prog));
      },
      (err) => {
        // if Error while uploading
        window.alert(err);
      },
      () => {
        // When the upload is done.
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            document.getElementById("fileInput").value = "";
            setGetUploadedFile(url);
          })
          .catch((err) => window.alert(err));
      }
    );
  };
  return (
    <div className="container">
      <div
        className="boxcon"
        style={{
          borderRadius: "15px",
          backgroundColor: "#fff",
          boxShadow: "5px 5px 10px #363e4f",
        }}
      >
        <h1 className="text-center bg-light text-secondary">Upload File</h1>
        <div style={{ marginBottom: "5px" }}>Progress: {progress}%</div>
        <ProgressBar completed={progress} />
        <br />
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile2Upload(e.target.files[0])}
        />
        <button
          onClick={uploadFile}
          style={{
            width: "100%",
            height: "35px",
            marginTop: "10px",
            borderRadius: "15px",
            borderColor: "#363e4f",
            backgroundColor: "#FEE670",
            boxShadow: "5px 10px 20px #363e4f",
            color: "#000",
          }}
        >
          Upload File
        </button>
      </div>
      <hr />
      {getUploadedFile ? (
        <div>
          <center>
            <img
              src={getUploadedFile}
              alt="uploaded file"
              style={{ width: "40%", height: "40%" }}
            />
          </center>
          <hr />
          <span>Link: </span>
          <a href={getUploadedFile} target="_blank" rel="noreferrer">
            {getUploadedFile}
          </a>
          <hr />
          <Link style={{ margin: 5 }} to="/">
            <center>
              <button className="btnout">Home</button>
            </center>
          </Link>
        </div>
      ) : (
        <div>No File</div>
      )}
    </div>
  );
};
export default Upload;
