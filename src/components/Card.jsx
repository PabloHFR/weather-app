import React from "react";

const Card = ({ className, component: Component, data }) => {
  return (
    <div className={className}>{Component && <Component data={data} />}</div>
  );
};

export default Card;
