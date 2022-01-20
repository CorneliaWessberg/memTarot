import React from "react";
import Header from "./head/header";
import NavigationMenu from "./head/navMenu";
import Homepage from "./landingpage/homepage";
import Footer from "./landingpage/footer";
import AboutMe from "./admin/aboutMe";
import Contact from "./admin/contact";
import Youtube from "./admin/youtube";
import SessionList from "./user/sessions";
import AddSession from "./admin/addSession";
import Register from "./head/registration";
import ProfilePage from "./user/profilePage";
import Bookings from "./user/bookings";
import Login from "./head/login";
import Dashboard from "./admin/dashboard";
import Cart from "./user/cart";
import Shop from "./user/shop";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";





export default function RouteApp() {
  return (
    <>
      <Router>
        <Header />
        <NavigationMenu />

        <div id="content">
        <div id="content-inside">
        <Routes>
          <Route path="/" exact element={ <Homepage /> } />
          <Route path="/aboutMe" element={ <AboutMe /> } />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/youtube" element={ <Youtube />} />
          <Route path="/addSession" element={ <AddSession />} />
          <Route path="/registration" element={ <Register />} />
          <Route path="/profilePage" element={ <ProfilePage />} />
          <Route path="/bookings" element={ <Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sessions" element={<SessionList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        </div>
        </div>

        <Footer />
      </Router>
    </>
  );
}
