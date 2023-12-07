import React from "react";
import "./styling/about.css";
import img2 from "./images/img2.jpg"
const AboutPage = () => {
  return (
    <div className="about-page" id="About">
      <div className="about-content">
        <h1>About</h1>

        <div className="about-container">
          <div className="a-left"  data-aos="fade-right" >
            <img src={img2} alt="" />
          </div>
      <div className="a-right"  data-aos="fade-left" >
        <h3 className="about-heading">
          Get to know us
        </h3>
      <p>
          At xplur, we are passionate about connecting adventurers
          with the wonders of nature. Our app is designed to cater to both
          seasoned trekkers and beginners, offering a wide range of trekking
          experiences in mesmerizing landscapes around the world.
        </p>
<div className="num">
  <div className="tours">
    <span >500</span>
    <p>Tours</p>
  </div>

  <div className="years">
    <span>10</span>
    <p>Years</p>
  </div>

  <div className="Members">
    <span>1500</span>
    <p>Members</p>
  </div>

    <div className="Reviews">
    <span>10</span>
    <p>Reviews</p>
  </div>
</div>

      </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
