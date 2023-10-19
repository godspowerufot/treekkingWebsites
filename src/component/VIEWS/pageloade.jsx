import React, { useEffect } from "react";
import "./styling/header.css";
import Navbar from "./Navbar";
import Section from "./section.jsx";
import { Link } from "react-router-dom";

function New() {
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = elem.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);

  return (
    <>
      <div className="landing" id="home">
        <Navbar />
        <div className="headerb">
        <div class="content-text container-text">
        <div class="head-text glow swift-up-text">EXPLORE</div>
        <div class="sub-text swift-up-text">
          Explore the world and gain new experience with partner
        </div>
      </div>

          <div className="btn" style={{ marginLeft: "-18px" }}>
            <Link to="/signIn">
              <button className="login-button">
                <span>Login</span>
              </button>
            </Link>
            <Link to="/signUp">
              <button className="Register-button">
                <span>Sign Up</span>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <Section />
    </>
  );
}

export default New;
