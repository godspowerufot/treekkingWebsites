import React from "react";
import "./header.css";
import image from "./images/fun-illustration-3d-cartoon-backpacker (1).jpg";
import Navbar from "./Navbar";
import Section from "./section";
import Footer from "./footer";
import { Link } from "react-router-dom";
function New() {
  return (
    <>
      <div>
        <Navbar />
        <div className="box">
          <div
            className="images"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine">
            <img src={image} alt="walking illustration" className="image" />
          </div>
          <div className="text" data-aos="fade-left">
            Find a partner and Trek For Fun , It Simple,Safe and healthy!.
            <br />
            <div className="btn">
              <Link to="/signIn">
                {" "}
                <button className="login-button">
                  <span>Sign In</span>
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
        <Footer />
      </div>
    </>
  );
}

export default New;
