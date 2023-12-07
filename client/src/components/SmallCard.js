import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SmallCard.css";

function SmallCard({ borderColor, icon, iconColor, text }) {
  const style = {
    borderBottom: `2px solid ${borderColor}`,
  };
  return (
    <>
      <div className="small-card" style={style}>
        <FontAwesomeIcon icon={icon} size="xl" color={iconColor} />
        <p className="m-0 mt-4">{text}</p>
      </div>
    </>
  );
}

export default SmallCard;
