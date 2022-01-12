import React from "react";
import Header from "./head/header";
import NavigationMenu from "./head/navMenu";
import Homepage from "./landingpage/homepage";
import Footer from "./landingpage/footer";
import AboutMe from "./admin/aboutMe";
import Carousel from "./landingpage/carousel";
import Contact from "./admin/contact";
import Calender from "./user/calender";
import Youtube from "./admin/youtube";
import SessionList from "./user/sessions";
import AddSession from "./admin/addSession";
import Register from "./head/registration";
import ProfilePage from "./user/profilePage";
import Bookings from "./user/bookings";
import Login from "./head/login";
import Dashboard from "./admin/dashboard";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";





export default function RouteApp() {
  return (
    <>
      <Router>
        <Header />
        <NavigationMenu />

        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/aboutMe" element={ <AboutMe /> } />
          <Route path="/carousel" element={ <Carousel />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/calender" element={ <Calender />} />
          <Route path="/youtube" element={ <Youtube />} />
          <Route path="/addSession" element={ <AddSession />} />
          <Route path="/registration" element={ <Register />} />
          <Route path="/profilePage" element={ <ProfilePage />} />
          <Route path="/bookings" element={ <Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sessions" element={<SessionList />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
