import React, { useState, useEffect } from "react";
import "./Loader.css"; // Import the CSS file with the loader styles

const Loader = () => {


  return (
    <div className="loader">
      <div className="text-trackers"> TREKKERS</div>
      <div className="text-trackerss" data-aos="fade-in">
        FOR
      </div>
      <div
        className="text-trackersss"
        data-aos="fade-right"
        data-aos-ease="ease-in">
        FUN
      </div>
    </div>
  );
};

export default Loader;
