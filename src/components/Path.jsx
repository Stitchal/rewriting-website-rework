import React from "react";
import { NavLink } from "react-router-dom";

const Path = ({ paths }) => {
  return (
    <ul className="path-container">
      <li key="Home">
        <NavLink key="Home" to="/" className="Home">
          Home
        </NavLink>
      </li>
      {paths.map((element, index) => (
        <li key={element.name}>
          <NavLink
            key={element.name}
            to={element.path}
            className={element.name}
          >
            {element.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Path;
