import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Lead Dashboard</h2>
      <ul>
        <li>All Leads</li>
        <li>By Lead Stage (Active)</li>
        <li>Unassigned</li>
        <li>New Leads</li>
        <li>Followup Leads</li>
        <li>Potential</li>
        <li>Positive</li>
        <li>Converted</li>
        <li>Closed</li>
        <li>Lead Report</li>
        <li>Import from XL</li>
      </ul>
    </div>
  );
};

export default Sidebar;
