import React from "react";
import { NavLink } from "react-router-dom";

const RewritingNavigation = () => {
  return (
    <div className="rewriting-navigation-container">
      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-items">
        <NavLink to="/rewriting" className="nav-link">
          <li>Home</li>
        </NavLink>
        <NavLink to="/rewriting/systems" className="nav-link">
          <li>Systems</li>
        </NavLink>
        <NavLink to="/rewriting/mailing-list" className="nav-link">
          <li>Mailing list</li>
        </NavLink>
        <NavLink to="/rewriting/ressources" className="nav-link">
          <li>Ressources</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default RewritingNavigation;
