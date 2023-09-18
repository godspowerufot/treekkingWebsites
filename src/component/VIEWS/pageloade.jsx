import React from "react";
import "./styling/header.css";
import Navbar from "./Navbar";
import Section from "./section.jsx";
import Footer from "./footer";
import { Link } from "react-router-dom";
function New() {
  return (
    <>
      <div  className="landingPage">
        <Navbar />

        <div className="box" id="home">
          <div className="text" data-aos="zoom-in">
            Find a partner and Trek For Fun , It Simple,Safe and healthy!.
            <br />
            <div className="btn" style={{ marginLeft: "   -18px" }}>
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
