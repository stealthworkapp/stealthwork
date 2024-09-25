import React, { useState, useEffect } from "react";

const GLiNetConnectionChecker = () => {
  const [isLikelyConnected, setIsLikelyConnected] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const checkPossibleRouterConnection = () => {
    setIsChecking(true);

    // Check if we're on a private network
    const isPrivateIP = () => {
      return new Promise((resolve) => {
        const rtcPeerConnection = new RTCPeerConnection({ iceServers: [] });
        rtcPeerConnection.createDataChannel("");
        rtcPeerConnection
          .createOffer()
          .then((offer) => rtcPeerConnection.setLocalDescription(offer))
          .then(() => {
            rtcPeerConnection.onicecandidate = (ice) => {
              if (ice && ice.candidate && ice.candidate.candidate) {
                const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
                const match = ipRegex.exec(ice.candidate.candidate);
                if (match) {
                  const ip = match[1];
                  resolve(
                    ip.startsWith("10.") ||
                      ip.startsWith("192.168.") ||
                      (ip.startsWith("172.") &&
                        parseInt(ip.split(".")[1]) >= 16 &&
                        parseInt(ip.split(".")[1]) <= 31)
                  );
                }
              }
            };
          });
      });
    };

    // Check network type if available
    const checkNetworkType = () => {
      if (navigator.connection && navigator.connection.type) {
        return navigator.connection.type === "wifi";
      }
      return null; // Unknown
    };

    Promise.all([isPrivateIP(), checkNetworkType()])
      .then(([isPrivate, isWifi]) => {
        setIsLikelyConnected(isPrivate && (isWifi === true || isWifi === null));
        setIsChecking(false);
      })
      .catch(() => {
        setIsLikelyConnected(false);
        setIsChecking(false);
      });
  };

  useEffect(() => {
    checkPossibleRouterConnection();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-white">
        GL.iNet Router Connection
      </h2>
      {isChecking ? (
        <p className="text-white">Checking possible connection to router...</p>
      ) : isLikelyConnected ? (
        <div>
          <p className="text-green-600 mb-4">
            You may be connected to a GL.iNet router network
          </p>
          <a
            href="http://192.168.8.1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          >
            Try GL.iNet Dashboard
          </a>
        </div>
      ) : (
        <div>
          <p className="text-red-600 mb-4">
            You may not be connected to a GL.iNet router network. Please check
            your WiFi connection.
          </p>
          <button
            onClick={checkPossibleRouterConnection}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Check Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GLiNetConnectionChecker;
