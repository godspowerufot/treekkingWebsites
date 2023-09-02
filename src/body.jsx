import React, { useState, useEffect } from "react";

import "./App.css";

import "aos/dist/aos.css";
import AOS from "aos";
import Loader from "./Loader.jsx";

import New from "./component/VIEWS/pageloade";

function Bodypage() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 0 });
  }, []);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Simulate a delay to demonstrate the loader
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="App">{!showLoader ? <Loader /> : <New />}</div>
    </>
  );
}

export default Bodypage;
