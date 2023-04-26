import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo_fscd from "../assets/img/fscd.png";
import logo_ifip from "../assets/img/ifip.png";

const IntranetNavigation = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive);
  }

  const logout = () => {
    localStorage.setItem("authenticated", false);
    console.log("logedOut");
    navigate("/login");
  };

  return (
    <div className="intranet-navigation-container">
      <div className="navbar">
        <div className="bars" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-items ${isActive ? "active" : ""}`}>
          <button onClick={logout}>Logout</button>
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
export default IntranetNavigation;
