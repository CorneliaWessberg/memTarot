import React from "react";
import Header from "./head/header";
import Homepage from "./homepage";
import Footer from "./footer";
import AboutMe from "./aboutMe";
import Carousel from "./carousel";
import Contact from "./contact";
import Calender from "./calender";
import Youtube from "./youtube";
import SessionList from "./sessions";
import AddSession from "./addSession";

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
          <Route path="/calender" element={ <Calender />} />
          <Route path="/youtube" element={ <Youtube />} />
          <Route path="/sessions" element={ <SessionList />} />
          <Route path="/addSessions" element={ <AddSession />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
