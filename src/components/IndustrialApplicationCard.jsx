import React from "react";
import Tag from "./Tag";
import { NavLink } from "react-router-dom";

const IndustrialApplicationCard = (props) => {
  const { title, url, tags } = props;
  return (
    <NavLink to={url} className="industrial-application-card">
      <div className="name">{title} </div>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
    </NavLink>
  );
};

export default IndustrialApplicationCard;
