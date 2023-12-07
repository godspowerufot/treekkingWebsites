import React from "react";
// eslint-disable-next-line no-unused-vars
import { LocationOnTwoTone } from "@mui/icons-material";
import "./styling/section.css";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Card() {
  const text = [
    {
      text: "Authentication",
      link: "  Create an account and log in to start your xplur journey.",
    },
    {
      text: "Mark Location",
      link: "Select your preferred location, choose dates, and make a reservations",
    },
    {
      text: "Show Invites",
      link: " Connect with like-minded people and form a  trek together.",
    },
    {
      text: "Send invites ",
      link: "Send invites to people and conect together and feel safe when Exploring",
    },
  ];

  return (
    <>
<div className="cardRow">
<div className="cardContain">
    <div className="icon">
            {" "}
            <LockPersonIcon
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
<div className="textBox">
            <h2>{text[0].text}</h2>
            <p> {text[0].link}</p>
          </div>
    </div>

    <div className="cardContain">
    <div className="icon">
            {" "}
            <LocationOnTwoTone
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
<div className="textBox">
            <h2>{text[1].text}</h2>
            <p> {text[1].link}</p>
          </div>
    </div>

    <div className="cardContain">
    <div className="icon">
            {" "}
            <VisibilityIcon
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
<div className="textBox">
            <h2>{text[2].text}</h2>
            <p> {text[2].link}</p>
          </div>
    </div>

    <div className="cardContain">
    <div className="icon">
            {" "}
            <FileUploadIcon
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
<div className="textBox">
            <h2>{text[3].text}</h2>
            <p> {text[3].link}</p>
          </div>
    </div>

    
</div>


    </>
  );
}

export default Card;
  