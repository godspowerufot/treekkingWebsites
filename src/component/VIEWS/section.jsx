/* eslint-disable no-unused-vars */
// import React, { useEffect } from "react";
import react from "react"
import "./styling/section.css";
import "./styling/header.css";
import AboutPage from "./about.jsx";
import Card from "./card.jsx";
// import images from "../assets/images/img9.jpg";
import Footer from "./footer";
// import LockPersonIcon from '@mui/icons-material/LockPerson';
import images1 from"../assets/images/images.jpg"
import images3 from"../assets/images/images3.jpg"
import images4 from"../assets/images/images4.jpg"
import images2 from"../assets/images/images2.jpg"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import bg4 from "./images/bg4.jpg"
import vic from "./images/vic.jpg"
import bg1 from "./images/bg1.jpg"


function Section() {
  const itemList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Services",
      link: "#services",
    },
  
  ];
  return (
    <>
      <section>
        <div className="bg">




          <div className="cardSection" id="catalogues">
             <div className="left imges" data-aos="fade-right">

          <img className="box1" src={img1} alt="" />

           <img className="box2" src={img2} alt="" />

        <img className="box3" src={bg4} alt="" />

             </div>

            <div className="right" data-aos="fade-left" id="">
            <h2 className="tt">HOW IT WORKS</h2>
            <p className="ttp">Heres how you can use our website to its fullest potential Heres how you can use our website to its fullest potential</p>
             <Card />  
            </div>

                     </div>
        <div className="popular" id="destination">
          <div className="popularContainer">
            <h2 class="h2 section-title" data-aos="fade-up zoom-in">Popular destination</h2>
            <p class="section-text" data-aos="fade-up" >
         we have four popular locations in which the school is the starting point for all users to their several locations 
            </p>
            <div class="popular-list">

                  <div class="popular-card" data-aos="zoom-in-up">
                    <figure class="card-imgs">
                      <img src={vic} alt="San miguel,italy"/>
                    </figure>

                    <div class="card-content">
                    <p class="card-subtitle"><strong>Lagos</strong></p>

                      <h3 class="h3 card-title">Victoria Island</h3>

                      <p class="card-text">
                      Victoria Island: Lagos' Iconic Business Hub with Stunning Ocean Views
                      </p>
                    </div>
                  </div>

                  <div class="popular-card" data-aos="zoom-in-up">
                    <figure class="card-imgs">
                      <img src={images3} alt="San miguel,italy" />
                    </figure>

                    <div class="card-content">
                      <p class="card-subtitle"><strong>Dubai</strong></p>

                      <h3 class="h3 card-title">The Burj Khalifa</h3>

                      <p class="card-text">
                      Dubai, a top tourist destination, boasts luxury, culture, and stunning architecture.
                      </p>
                    </div>
                  </div>

                  <div class="popular-card" data-aos="zoom-in-up">
                    <figure class="card-imgs">
                      <img src={images4} alt="San miguel,italy" />
                    </figure>

                    <div class="card-content">
                    <p class="card-subtitle"><strong>Paris</strong></p>

                      <h3 class="h3 card-title">Eiffel Tower</h3>

                      <p class="card-text">
                      Paris' Iconic Landmark, Offering Breathtaking Panoramic Views of the City of Lights.
                      </p>
                    </div>
                  </div>
            </div>
          </div>
        </div>        
          </div>

           <div className="bodyHeading" id="services">  

          <div className="bg2">
          <AboutPage />

<div class="gallery" id="gallery">
            <div class="containera">
             

              <h2 class="h2 section-title">Photo's From Travellers</h2>


             <div className="grid-container">
             <div className="grid">
                <img src={images1} className="g-img1" data-aos="fade-down-right" alt="" />
                <img src={images2} className="g-img2" data-aos="fade-right"  alt="" />
              </div>

              
              <div className="grid">
                <img src={images3} className="g-img3" data-aos="fade-down" alt="" />
                <img src={images4} className="g-img4" data-aos="fade-up" alt="" />
              </div>

              
              <div className="grid">
                <img src={vic} className="g-img1" data-aos="fade-down-left"alt="" />
                <img src={bg1} className="g-img2" data-aos="fade-left" alt="" />
              </div>
             </div>
            </div>
          </div>
         


         </div>

        </div>
        <Footer />
      </section>
    </>
  );
}

export default Section;
