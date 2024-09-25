import React from "react";
import "../css/LoadingCircle.css";

const LoadingCircle = () => (
  <div className="loading-container">
    <div className="loading-circle animate-pulse">
      <div className="relative z-10 text-white font-bold">Loading...</div>
    </div>
  </div>
);

export default LoadingCircle;
