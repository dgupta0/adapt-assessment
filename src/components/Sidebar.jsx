import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Inventory</li>
        <li className="clicked">Orders</li>
        <li>Shipping</li>
        <li>Channel</li>
      </ul>
    </div>
  );
};

export default Sidebar;
