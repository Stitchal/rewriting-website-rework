import React from "react";

const Ressource = ({ ressourceTitle, description }) => {
  return (
    <div className="ressource-card">
      <h3 className="ressource-title">{ressourceTitle}</h3>
      <p className="ressource-description">{description}</p>
    </div>
  );
};

export default Ressource;
