import React from "react";
import "./NotFound.css";
import SvgSad from "../../assets/SVGs/SvgSad";

const NotFound = () => {
  return (
    <div className="notFound">
      <p>Oops</p>
      <h1>not found!</h1>
      <h3>404</h3>
      <SvgSad />
    </div>
  );
};

export default NotFound;
