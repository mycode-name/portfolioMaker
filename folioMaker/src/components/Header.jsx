import React from 'react';
import { FaTabletAlt, FaMobileAlt, FaLaptop } from 'react-icons/fa';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Left section: Company Name */}
      <div className="company-name">
        FolioBuilder
      </div>

      {/* Center section: Device Icons */}
      <div className="device-icons">
        <FaLaptop title="Desktop View" className="device-icon" />
        <FaTabletAlt title="Tablet View" className="device-icon" />
        <FaMobileAlt title="Mobile View" className="device-icon" />
      </div>

      {/* Right section: Buttons */}
      <div>
        <button className="header-button save-button">
          Save
        </button>
        <button className="header-button publish-button">
          Publish
        </button>
      </div>
    </header>
  );
};

export default Header;