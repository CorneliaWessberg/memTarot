import React from "react";
import Header from "./header";
import NavigationMenu from "./navMenu";
import Homepage from "./homepage";
import Footer from "./footer";
import AboutMe from "./aboutMe";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function RouteApp() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/aboutMe" element={ <AboutMe /> } />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
