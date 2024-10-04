import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import Navigation from "./components/Navigation";
import ScrollToTop from "./helpers/scrollToTop";
import Routes from "./helpers/routes";
import ReactGA from 'react-ga4'

const App = () => {
  // useGoogleAnalytics();
  ReactGA.initialize('G-TXQZQRPYRP');

  return (
    <Router>
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
    </Router>
  );
};

export default App;
