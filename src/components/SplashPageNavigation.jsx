import React from "react";
import { NavLink } from "react-router-dom";

const SplashPageNavigation = () => {
  return (
    <div className="splash-page-navigation-container">
      <div className="fscd-conference-container">
        <div className="fscd-background"></div>
        <div className="content"></div>
      </div>
      <div className="first-container">
        <div className="rewriting-container">
          <NavLink to="/rewriting">Rewriting</NavLink>
        </div>
        <div className="lambda-calculus-container">
          <NavLink to="/lambda-calculus">Lambda Calculus</NavLink>
        </div>
        <div className="logic-container">
          <NavLink to="/logic">Logic</NavLink>
        </div>
      </div>
      <div className="second-container">
        <div className="mailing-list-container">
          <NavLink to="/mailing-list">Mailing list</NavLink>
        </div>
        <div className="open-problems-container">
          <NavLink to="/open-problems">Open problems</NavLink>
        </div>
        <div className="authors-container">
          <NavLink to="/authors">Authors</NavLink>
        </div>
        <div className="industrial-applications-container">
          <NavLink to="/industrial-applications">
            Industrial applications
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SplashPageNavigation;
