import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="toggle-icon" onClick={toggleSidebar}>
          <FaBars size={22} />
        </div>

        {/* Menu Items */}
        {isExpanded && (
          <ul className="menu">
            <li>
              <Link to="/dashboard/dashHome">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/setting">Settings</Link>
            </li>
            <li>Logout</li>
          </ul>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
