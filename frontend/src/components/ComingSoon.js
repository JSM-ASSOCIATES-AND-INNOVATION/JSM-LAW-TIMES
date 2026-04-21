import React from "react";
import { Link } from "react-router-dom";
import { Hammer } from "lucide-react";
import "./ComingSoon.css";

const ComingSoon = ({ pageName }) => {
  return (
    <div className="comingSoonContainer">
      <div className="comingSoonContent">
        <div className="animIcon">
          <Hammer size={80} className="hammerAnim" />
        </div>
        <h1>{pageName || "Maintenance"} Under Construction</h1>
        <p>We are working hard to bring you something amazing. This page will be available soon!</p>
        <div className="loaderLine"></div>
        <Link to="/" className="backHome">Back to Home</Link>
      </div>
    </div>
  );
};

export default ComingSoon;
