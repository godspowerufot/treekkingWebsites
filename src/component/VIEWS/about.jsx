import React from "react";
import "./styling/about.css";
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Our Trekking App</h1>
        <p>
          At TrekkingAdventures, we are passionate about connecting adventurers
          with the wonders of nature. Our app is designed to cater to both
          seasoned trekkers and beginners, offering a wide range of trekking
          experiences in mesmerizing landscapes around the world.
        </p>
        <p>
          Whether you're looking for a thrilling high-altitude expedition or a
          peaceful hike through lush forests, our app has something for
          everyone. We believe that trekking is not just about reaching the
          destination but embracing the journey, cherishing moments of
          camaraderie, and appreciating the beauty of our planet.
        </p>
        <p>
          With safety as our utmost priority, we ensure that all treks listed on
          our app are conducted by experienced guides who are well-versed with
          the terrains and equipped to handle emergencies. Additionally, we
          provide weather updates and safety tips to keep trekkers informed and
          prepared.
        </p>
        <p>
          Join our ever-growing community of adventure enthusiasts and embark on
          memorable treks that will leave you with stories to tell for a
          lifetime. Happy trekking!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
