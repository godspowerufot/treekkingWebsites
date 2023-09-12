// Sidebar.js
import React from "react";
import "./Sidebar.css"; // Create a CSS file for styling the sidebar

function Sidebar() {
  // You can fetch the list of friends and users going to the same location here

  return (
    <div className="sidebar">
      {/* Display the list of friends and users */}
      <h2>All Friends and Users Going to the Same Location</h2>
      {/* Map through the list and display each user/friend */}
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        {/* Add more list items for each friend/user */}
      </ul>
    </div>
  );
}

export default Sidebar;
