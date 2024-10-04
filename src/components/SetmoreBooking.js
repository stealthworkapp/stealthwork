import React, { useEffect, useState } from "react";

const SetmoreBooking = (props) => {
  const { content } = props;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Function to load the Setmore script
    const loadSetmoreScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js";
      script.id = "setmore_script";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };

    // Load the script
    loadSetmoreScript();

    // Cleanup function to remove the script when component unmounts
    return () => {
      const script = document.getElementById("setmore_script");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="setmore-booking-container">
      {scriptLoaded && (
        <a
          {...props}
          id="Setmore_button_iframe"
          href="https://booking.setmore.com/scheduleappointment/03bc790a-7ad5-49a1-911c-13572acd0612"
          style={{ float: "none" }}
        >
          {content}
        </a>
      )}
    </div>
  );
};

export default SetmoreBooking;
