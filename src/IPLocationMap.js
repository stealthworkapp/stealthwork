import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const IPLocationMap = () => {
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch IP information");
        }
        return response.json();
      })
      .then((data) => {
        setIpInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-8 pt-32">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-8 pt-32 text-red-500">Error: {error}</div>
    );
  }

  return (
    <div className="p-8 pt-32 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Your IP and Location
      </h1>
      {ipInfo && (
        <div className="max-w-2xl mx-auto mb-8">
          <p>
            <strong>IP Address:</strong> {ipInfo.ip}
          </p>
          <p>
            <strong>City:</strong> {ipInfo.city}
          </p>
          <p>
            <strong>Region:</strong> {ipInfo.region}
          </p>
          <p>
            <strong>Country:</strong> {ipInfo.country_name}
          </p>
          <p>
            <strong>Latitude:</strong> {ipInfo.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {ipInfo.longitude}
          </p>
        </div>
      )}
      {ipInfo && (
        <div style={{ height: "400px", width: "100%" }}>
          <MapContainer
            center={[ipInfo.latitude, ipInfo.longitude]}
            zoom={23}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[ipInfo.latitude, ipInfo.longitude]}>
              <Popup>Your location</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default IPLocationMap;
