import React, { useState } from "react";
import "./card.css";
import { useParams } from "react-router-dom";
import { AddCircleOutlineRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { UserAuth } from "../contextapi";
import { Delete } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { ArrowLeft } from "@mui/icons-material";
import { ArrowUp } from "@mui/icons-material";
import { Link } from "react-router-dom";
function DisplayPage() {
  const [styless, setShowNavbar] = useState(true);
  const handleShowNavbar = () => {
    setShowNavbar((p) => !styless);
  };
  const { selectImage, setSelectImage } = UserAuth();
  console.log(setSelectImage);

  const { location } = useParams();
  return (
    <>
      <div>
        <div id="arrowTop">
          <Link to="/function">
            <ArrowLeft />
          </Link>
        </div>
        {selectImage ? (
          <img src={selectImage} alt={location} />
        ) : (
          <div> there is no mage</div>
        )}
      </div>
      <div className="AboutLocation">
        <div className="mapdescriptions">
          <div className="mapdescription">
            Distance
            <span id="minitext"> 2.8km </span>
          </div>
          <div className="mapdescription">
            {" "}
            Time <span id="minitext"> 2.8km </span>
          </div>
          <div className="mapdescription">
            {" "}
            elevation <span id="minitext"> 2.8km </span>
          </div>
        </div>
        <div className="rounded">
          <div className="mapdescription">
            <span id="roundes">
              <Delete width="2em" height="2em" />
            </span>
          </div>
          <div className="mapdescription">
            <span id="rounde">
              <Link to="/AboutDetailsPage">
                <Avatar width="36px" height="37px" />
              </Link>
            </span>
          </div>
          <div className="mapdescription">
            {" "}
            <span id="roundes">
              <Add width="2em" height="2em" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
