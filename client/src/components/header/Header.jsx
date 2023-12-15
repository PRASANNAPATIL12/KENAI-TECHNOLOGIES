import React, { useState } from "react";
import "./HeaderStyle.css";
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState([false, false, false, false]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        {["CLIENT", "PROJECT ", "TICKET TYPE", "Column 4"].map((title, index) => (
          <div className="column" key={index}>
            <h2>
              {title}
              <button onClick={() => toggleDropdown(index)}>▾</button>
            </h2>
            {dropdownOpen[index] && (
              <ul className="dropdown">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
                <li><a href="#">Option 3</a></li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;