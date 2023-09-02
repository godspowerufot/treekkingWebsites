import React, { useState } from "react";
import "./card.css";
import { Avatar } from "@mui/material";
import { UserAuth } from "../contextapi";
import { Delete } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { ChevronLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MiniDrawer from "./drawer";
function DisplayPage() {
  const { selectImage } = UserAuth();

  return (
    <>
      <div>
        <MiniDrawer />

        <div className="iframe-container">
          {" "}
          <div id="arrowTop">
            <Link to="/function">
              <ChevronLeft />
            </Link>
          </div>
          {selectImage ? (
            <iframe
              src={selectImage}
              style={{ border: "0" }}
              title="name"
              
              ></iframe>
          ) : (
            <div> there is no mage</div>
          )}
        </div>
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
