import React from "react";
import Header from "./header";
import NavigationMenu from "./navMenu";
import Homepage from "./homepage";
import Footer from "./footer";
import AboutMe from "./aboutMe";
import Carousel from "./carousel";
import Contact from "./contact";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function RouteApp() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/aboutMe" element={ <AboutMe /> } />
          <Route path="/carousel" element={ <Carousel />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
