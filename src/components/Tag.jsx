import React, { useEffect, useState } from "react";

const Tag = ({ name }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    findColor();
  }, [name]);

  const findColor = () => {
    name === "Rewriting"
      ? setColor("#A0E0BA")
      : name === "Lambda Calculus"
      ? setColor("#A1C5EF")
      : setColor("#2C3E50");
  };

  return (
    <div
      className="tag-container"
      style={{
        backgroundColor: color,
        color: name === "Logic" ? "rgb(243, 243, 243)" : "",
      }}
    >
      {name}
    </div>
  );
};

export default Tag;
