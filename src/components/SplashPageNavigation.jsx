import React from "react";
import { NavLink } from "react-router-dom";

const SplashPageNavigation = () => {
  return (
    <div className="splash-page-navigation-container">
      <div className="rewriting-container">
        <NavLink to="/rewriting">Rewriting</NavLink>
      </div>
      <div className="lambda-calculus-container">
        <NavLink to="/lambda-calculus">Lambda Calculus</NavLink>
      </div>
    </div>
  );
};

export default SplashPageNavigation;
