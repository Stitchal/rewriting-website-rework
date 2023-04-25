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
            to="/rewriting"
            className={`nav-link ${
              location.pathname === "/rewriting" ? "selected" : ""
            }`}
          >
            <li>Rewriting</li>
          </NavLink>
          <NavLink
            to="/rewriting/software"
            className={`nav-link ${
              location.pathname === "/rewriting/software" ? "selected" : ""
            }`}
          >
            <li>Software</li>
          </NavLink>
          <NavLink
            to="/rewriting/ressources"
            className={`nav-link ${
              location.pathname === "/rewriting/ressources" ? "selected" : ""
            }`}
          >
            <li>Ressources</li>
          </NavLink>
        </ul>
        <div className="logos">
          <a href="https://ifip-wg-rewriting.cs.ru.nl/">
            <img src={logo_ifip} alt="" />
          </a>
          <a href="https://fscd-conference.org/" className="fscd-website">
            <img src={logo_fscd} alt="logo fscd" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RewritingNavigation;
