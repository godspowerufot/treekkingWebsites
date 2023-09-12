import React, { useEffect } from "react";
import { LocationOnTwoTone } from "@mui/icons-material";

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
      text: "Walk in Group",
      link: " Connect with like-minded trekkers and form a group to trek together.",
    },
    {
      text: "Stay Secure",
      link: "#news",
    },
  ];

  return (
    <>
    
      <div className="row" style={{display:"flex",
      flexDirection:"row"}}>
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
            <h1>{text[0].text}</h1>
            <p> {text[0].link}</p>
          </div>
        </div>
        </div>
        </div>
      <div className="row" style={{display:"flex",
      flexDirection:"row"}}>
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
            <h1>{text[3].text}</h1>
            <p> {text[3].link}</p>
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
            <h1>{text[2].text}</h1>
            <p> {text[2].link}</p>
          </div>
        </div>
        </div>
        </div>
    
    
    </>
  );
}

export default Card;
  