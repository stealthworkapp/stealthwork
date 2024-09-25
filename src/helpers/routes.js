import React from "react";
import { Route, Routes as RoutesList } from "react-router-dom";

import {
  BlogPost,
  Services,
  IPLocationMap,
  Blog,
  SpeedTest,
  FreeTools,
  Home,
  NotFound,
  RouterDashboard,
} from "../pages/index";

const Routes = () => {
  return (
    <RoutesList>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/articles" element={<Blog />} />
      <Route path="/articles/:urlName" element={<BlogPost />} />
      <Route path="/ip-location" element={<IPLocationMap />} />
      <Route path="/speedtest" element={<SpeedTest />} />
      <Route path="/tools" element={<FreeTools />} />
      <Route path="/glinet-router-connection" element={<RouterDashboard />} />
      <Route path="*" element={<NotFound />} />
    </RoutesList>
  );
};

export default Routes;
