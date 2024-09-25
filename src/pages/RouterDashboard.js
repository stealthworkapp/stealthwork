import React from "react";
import GLiNetConnectionChecker from "../components/GLiNetConnectionChecker";

const RouterDashboard = () => {
  return (
    <div className="p-8 pt-32 bg-black text-white">
      <GLiNetConnectionChecker />
    </div>
  );
};

export default RouterDashboard;
