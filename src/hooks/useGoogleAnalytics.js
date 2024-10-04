// hooks/useGoogleAnalytics.js
import { useEffect } from "react";

const useGoogleAnalytics = () => {
  useEffect(() => {
    // Function to load Google Analytics script
    const loadGoogleAnalytics = () => {
      // Create script element
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-TXQZQRPYRP";
      script.async = true;

      // Append script to document head
      document.head.appendChild(script);

      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-TXQZQRPYRP");
    };

    // Load Google Analytics
    loadGoogleAnalytics();

    // Clean up function
    return () => {
      // Remove the script when component unmounts
      const script = document.querySelector(
        'script[src="https://www.googletagmanager.com/gtag/js?id=G-TXQZQRPYRP"]'
      );
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount
};

export default useGoogleAnalytics;
