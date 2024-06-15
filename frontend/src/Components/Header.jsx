import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div>All Leads</div>

        <button className="header-button">All Users</button>
      </div>
      <div className="header-right">
        <button className="header-button">Sort Leads By</button>
        <button className="header-button">Filter Leads</button>
        <input
          type="text"
          className="header-search"
          placeholder="Search Keywords"
        />
      </div>
    </div>
  );
};

export default Header;
