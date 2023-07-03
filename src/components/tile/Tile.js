import React from "react";

export const Tile = ({ name, description }) => {
  const descriptionItems = Object.entries(description).map(([key, value]) => (
    <p className="tile" key={key}>
      {key}: {value}
    </p>
  ));

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionItems}
    </div>
  );
};
