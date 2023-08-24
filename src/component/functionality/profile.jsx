import React from "react";
import "./profilecard.css";
import { Avatar } from "@mui/material";
function ProfileCard({ change, another }) {
  return (
    <>
      <div className="card-container">
        <div className="round">
          <Avatar style={{ width: "100px", height: "100px" }} />
        </div>
        <h3>Ricky Park</h3>
        <h6>Ikot obiondgho</h6>
        <p>
          interest <br /> regNo
        </p>
        <div className="buttons">
          <button className="primary">Add</button>
          <button className="primary ghost">block</button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
