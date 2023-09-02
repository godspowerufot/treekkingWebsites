import React, { useEffect } from "react";
import { LocationOnTwoTone } from "@mui/icons-material";

function Card() {
  const itemList = [
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
      {itemList.map((text, index) => (
        <div
          className="card"
          key={index}
          data-aos="fade-left"
          data-aos-duration="5000s">
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
            <h1>{text.text}</h1>
            <p> {text.link}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
  