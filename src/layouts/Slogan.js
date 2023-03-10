import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

export const Slogan = () => {
  return (
    <div className="slogan">
      <div className="faIcon">
        <FontAwesomeIcon icon={faInfinity} />
      </div>
      <h3 className="slogan-description">
        The possibilities are endless. Treat yourself and go get the hair
        you&rsquo;ve always dreamed of.
      </h3>
    </div>
  );
};

export default Slogan;
