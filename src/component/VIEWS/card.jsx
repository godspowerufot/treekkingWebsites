import React, { useEffect } from "react";
import { LocationOnTwoTone } from "@mui/icons-material";
import "./styling/section.css";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Card() {
  const text = [
    {
      text: "Authentication",
      link: "  Create an account and log in to start your trekking journey.",
    },
    {
      text: "Mark Location",
      link: "Select your preferred trek, choose trekking dates, and make a reservations",
    },
    {
      text: "Show Invites",
      link: " Connect with like-minded trekkers and form a  trek together.",
    },
    {
      text: "Send invites ",
      link: "Send invites to people and conect together and feel safe when trekking",
    },
  ];

  return (
    <>
    
      <div className="row">
        <div className="co" style={{flexDirection:"column"}}>
        <div
          className="card"
  
        >
          <div className="icon">
            {" "}
            <LockPersonIcon
              style={{
                width: "100px",
                height: "70px",
              }}
            />
          </div>
          <div className="textBox">
            <h1>{text[0].text}</h1>
            <p> {text[0].link}</p>
          </div>
        </div>
        </div>
        <div className="co" style={{flexDirection:"column"}}>
        <div
          className="card"
  
        >
          <div className="icon">
            {" "}
            <LocationOnTwoTone
              style={{
                width: "100px",
                height: "70px",
              }}
            />
          </div>
          <div className="textBox">
            <h1>{text[1].text}</h1>
            <p> {text[1].link}</p>
          </div>
        </div>
        </div>
        </div>
      <div className="row">
            <div className="co" style={{flexDirection:"column"}}>
        <div
          className="card"
  
        >
          <div className="icon">
            {" "}
            < VisibilityIcon
              style={{
                width: "100px",
                height: "70px",
              }}
            />
          </div>
          <div className="textBox">
            <h1>{text[2].text}</h1>
            <p> {text[2].link}</p>
          </div>
        </div>
        </div>
            <div className="co" style={{flexDirection:"column"}}>
        <div
          className="card"
  
        >
          <div className="icon">
            {" "}
            <FileUploadIcon
              style={{
                width: "100px",
                height: "70px",
              }}
            />
          </div>
          <div className="textBox">
            <h1>{text[3].text}</h1>
            <p> {text[3].link}</p>
          </div>
        </div>
        </div>
        </div>
    
    
    </>
  );
}

export default Card;
  