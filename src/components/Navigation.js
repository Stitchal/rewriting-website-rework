import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Introduction</li>
        </NavLink>
        <NavLink to="/laboratories">
          <li>Laboratories</li>
        </NavLink>
        <NavLink to="/researchers">
          <li>Researchers</li>
        </NavLink>
        <NavLink to="/venues">
          <li>Venues</li>
        </NavLink>
        <NavLink to="/systems">
          <li>Systems</li>
        </NavLink>
        <NavLink to="/email-discussions">
          <li>E-mail discussion</li>
        </NavLink>
        <NavLink to="/books">
          <li>Books</li>
        </NavLink>
        <NavLink to="/surveys">
          <li>Surveys</li>
        </NavLink>
        <NavLink to="/courses">
          <li>Courses</li>
        </NavLink>
        <NavLink to="/online-bibliographies">
          <li>Online bibliographies</li>
        </NavLink>
        <NavLink to="/websites">
          <li>Websites</li>
        </NavLink>
        <NavLink to="/authors">
          <li>Authors</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
