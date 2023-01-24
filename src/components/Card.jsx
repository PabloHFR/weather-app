import React from "react";

const Card = ({ className, component: Component }) => {
  return <div className={className}>{Component && <Component />}</div>;
};

export default Card;
