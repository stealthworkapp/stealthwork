import React, { useState, useEffect } from "react";

const GLiNetConnectionChecker = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const checkRouterConnection = async () => {
    setIsChecking(true);
    try {
      // Attempt to fetch the router's login page
      const response = await fetch("http://192.168.8.1", { mode: "no-cors" });
      console.log(response)
      // If we get here, we assume we're connected (due to CORS, we can't actually check the response)
      setIsConnected(true);
    } catch (error) {
      console.error("Error checking router connection:", error);
      setIsConnected(false);
    }
    setIsChecking(false);
  };

  useEffect(() => {
    checkRouterConnection();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">GL.iNet Router Connection</h2>
      {isChecking ? (
        <p>Checking connection to router...</p>
      ) : isConnected ? (
        <div>
          <p className="text-green-600 mb-4">Connected to GL.iNet router</p>
          <a
            href="http://192.168.8.1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to GL.iNet Dashboard
          </a>
        </div>
      ) : (
        <div>
          <p className="text-red-600 mb-4">
            Not connected to GL.iNet router. Please connect to your router's
            WiFi network.
          </p>
          <button
            onClick={checkRouterConnection}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry Connection
          </button>
        </div>
      )}
    </div>
  );
};

export default GLiNetConnectionChecker;
