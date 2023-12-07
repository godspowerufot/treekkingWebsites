/* eslint-disable no-unused-vars */

// import React, { useEffect } from "react";
import react from "react"
import "./styling/section.css";
import "./styling/header.css";
import AboutPage from "./about.jsx";
import Card from "./card.jsx";
// import images from "../assets/images/img9.jpg";
import Footer from "./footer";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import bg4 from "./images/bg4.jpg"


  import gal1 from "./images/gal1.jpg"
  import gal2 from "./images/gal2.jpg"
  import gal3 from "./images/gal3.jpg"
  import gal4 from "./images/gal4.jpg"
  import gal5 from "./images/gal5.jpg"

  import loc1 from "./images/loc1.jpg"
  import loc2 from "./images/loc2.jpg"
  import loc3 from "./images/loc3.jpg"


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
                      <img src={loc1} alt="San miguel,italy"/>
                    </figure>

                    <div class="card-content">
                    <p class="card-subtitle"><strong>School - uyo Road</strong></p>

                    </div>
                  </div>

                  <div class="popular-card" data-aos="zoom-in-up">
                    <figure class="card-imgs">
                      <img src={loc3} alt="San miguel,italy" />
                    </figure>

                    <div class="card-content">
                      <p class="card-subtitle"><strong>School - Ikot Obiondgho</strong></p>

                    </div>
                  </div>

                  <div class="popular-card" data-aos="zoom-in-up">
                    <figure class="card-imgs">
                      <img src={loc2} alt="San miguel,italy" />
                    </figure>

                    <div class="card-content">
                    <p class="card-subtitle"><strong>School - Eket road</strong></p>

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
                <img src={gal1} className="g-img1" data-aos="fade-down-right" alt="" />
                <img src={gal2} className="g-img2" data-aos="fade-right"  alt="" />
              </div>

              
              <div className="grid">
                <img src={gal3} className="g-img3" data-aos="fade-down" alt="" />
                <img src={gal4} className="g-img4" data-aos="fade-up" alt="" />
              </div>

              
              <div className="grid">
                <img src={gal5} className="g-img1" data-aos="fade-down-left"alt="" />
                <img src={loc1} className="g-img2" data-aos="fade-left" alt="" />
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
