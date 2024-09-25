import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center px-4 p-8 pt-32">
      <div className="text-center">
        <AlertTriangle className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-300 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
