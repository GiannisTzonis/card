import React from "react";

export default function Star(props) {
  const starIcon = props.isFilled ? "filled-star.png" : "empty-star.png";
  return (
    <img
      src={`../images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
}
