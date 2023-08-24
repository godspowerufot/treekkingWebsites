import React, { useEffect } from "react";
import { UserAuth } from "../contextapi";
import { useParams } from "react-router-dom";
import "../CardDetaills.css";
function AboutDetailsPage() {
  const { selectImage } = UserAuth();
  const { location } = useParams();
  return (
    <>
      <div>
        <div className="heading"></div>
        <div className="cardDetails">
          {selectImage ? (
            <img src={selectImage} alt={location} />
          ) : (
            <div> there is no mage</div>
          )}
        </div>
      </div>
    </>
  );
}

export default AboutDetailsPage;
