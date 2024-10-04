import React, { useEffect } from "react";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import Navigation from "./components/Navigation";
import ScrollToTop from "./helpers/scrollToTop";
import Routes from "./helpers/routes";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  useGoogleAnalytics();
  ReactGA.initialize("G-TXQZQRPYRP");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: location.search,
    });
    // ReactGA.pageview(location.pathname + location.search);
    // console.log(location.pathname + location.search);
  }, [location]);

  return (
    <div>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-black">
        <Navigation />
        <main className="flex-grow">
          <Routes />
        </main>
        {/* <GLiNetConnectionChecker /> */}
        <footer className="bg-black p-4 text-center text-gray-500">
          © 2024 StealthWork. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
