import React, { useEffect } from "react";
import "./section.css";
import "./header.css";
import AboutPage from "./about.jsx";
import image from "./images/small-traveller-figure-world-tourism-day.jpeg";
import Card from "./card.jsx";

function Section() {
  return (
    <>
      <section>
        <div className="bodyHeading" data-aos="zoom-in">
          <h2>Mark your next step</h2>

          <div className="cardSection" id="catalogues">
            <Card />
          </div>

          <div className="change" data-aos="zoom-in">
            <img src={image} alt="walking illustration" className="image" />
            <p>
              {" "}
              GET TO YOUR LOCATION HAVING FUN WITH <br />
              <br />
              NO STRESS
            </p>
          </div>
          <AboutPage />
        </div>
      </section>
    </>
  );
}

export default Section;
