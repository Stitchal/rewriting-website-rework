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
          <NavLink to="/rewriting-website-rework/rewriting">Rewriting</NavLink>
        </div>
        <div className="lambda-calculus-container">
          <NavLink to="/rewriting-website-rework/lambda-calculus">Lambda Calculus</NavLink>
        </div>
        <div className="logic-container">
          <NavLink to="/rewriting-website-rework/logic">Logic</NavLink>
        </div>
      </div>
      <div className="second-container">
        <div className="mailing-list-container">
          <NavLink to="/rewriting-website-rework/mailing-list">Mailing list</NavLink>
        </div>
        <div className="open-problems-container">
          <NavLink to="/rewriting-website-rework/open-problems">Open problems</NavLink>
        </div>
        <div className="authors-container">
          <NavLink to="/rewriting-website-rework/authors">Authors</NavLink>
        </div>
        <div className="industrial-applications-container">
          <NavLink to="/rewriting-website-rework/industrial-applications">
            Industrial applications
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SplashPageNavigation;
