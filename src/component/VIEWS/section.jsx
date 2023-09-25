import React, { useEffect } from "react";
import "./styling/section.css";
import "./styling/header.css";
import AboutPage from "./about.jsx";
import Card from "./card.jsx";
import images from "../assets/images/img9.jpg";
import Footer from "./footer";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import images1 from"../assets/images/gallery-1.jpg"
import images3 from"../assets/images/gallery-3.jpg"
import images4 from"../assets/images/gallery-4.jpg"
import images5 from"../assets/images/gallery-5.jpg"

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
        <div className="popular" id="destination">
          <div className="popularContainer">
            <h2 class="h2 section-title">Popular destination</h2>
            <p class="section-text">
         we have four popular locations in which the school is the starting point for all users to their several locations 
            </p>
            <div class="popular-list" data-aos="zoom-in">
              {itemList.map((text, index) => (
                <div className="popular-lists">
                  <div class="popular-card">
                    <figure class="card-imgs">
                      <img src={images} alt="San miguel,italy" />
                    </figure>

                    <div class="card-content">
                      <p class="card-subtitle">Italy</p>

                      <h3 class="h3 card-title">San miguel</h3>

                      <p class="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="change">
          <div className="container" data-aos="zoom-in">
            <h1 className="hero-t">Journey to explore Nature</h1>
            <p class="hero-text">
              Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
              class corporis nostra rem quos voluptatibus habitant? Fames,
              vivamus minim nemo enim, gravida lobortis quasi, eum.
            </p>
          </div>
        </div>
        <div className="bodyHeading" data-aos="fade-up" id="services">
          <h2>HOW IT WORKS</h2>

          <div className="cardSection" id="catalogues">
      
            <Card />            
          </div>
          <div class="gallery" id="gallery">
            <div class="containera">
             

              <h2 class="h2 section-title">Photo's From Travellers</h2>

              <p class="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>

              <div class="gallery-list">
                <div className="row">
                  <div className="col">
                    <div class="gallery-item">
                      <figure class="gallery-image">
                        <img src={images1} alt="San miguel,italy" />
                      </figure>
                    </div>
                  </div>
                  <div className="col">
                    <div class="gallery-item">
                      <figure class="gallery-image">
                        <img src={images1} alt="San miguel,italy" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div class="gallery-item">
                      <figure class="gallery-image">
                        <img src={images4} alt="San miguel,italy" />
                      </figure>
                    </div>
                  </div>
                  <div className="col">
                    <div class="gallery-item">
                      <figure class="gallery-image">
                        <img src={images5} alt="San miguel,italy" />
                      </figure>
                    </div>
                  </div>
            </div>
                <div className="row">
                  <div className="col">
                    <div class="gallery-item">
                      <figure class="gallery-image">
                        <img src={images4} alt="San miguel,italy" />
                      </figure>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <AboutPage />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Section;
