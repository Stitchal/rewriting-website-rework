import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo_fscd from "../assets/img/fscd.png";
import logo_ifip from "../assets/img/ifip.png";

const RewritingNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive);
  }

  const location = useLocation();

  return (
    <div className="rewriting-navigation-container">
      <div className="navbar">
        <div className="bars" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-items ${isActive ? "active" : ""}`}>
          <NavLink
            to="/rewriting-website-rework/rewriting"
            className={`nav-link ${
              location.pathname === "/rewriting-website-rework/rewriting"
                ? "selected"
                : ""
            }`}
          >
            <li>Rewriting</li>
          </NavLink>
          <NavLink
            to="/rewriting-website-rework/rewriting/software"
            className={`nav-link ${
              location.pathname ===
              "/rewriting-website-rework/rewriting/software"
                ? "selected"
                : ""
            }`}
          >
            <li>Software</li>
          </NavLink>
          <NavLink
            to="/rewriting-website-rework/rewriting/ressources"
            className={`nav-link ${
              location.pathname ===
              "/rewriting-website-rework/rewriting/ressources"
                ? "selected"
                : ""
            }`}
          >
            <li>Ressources</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default RewritingNavigation;
