import React from "react";
import Header from "./head/header";
import NavigationMenu from "./head/navMenu";
import Homepage from "./landingpage/homepage";
import Footer from "./landingpage/footer";
import AboutMe from "./admin/aboutMe";
import Contact from "./admin/contact";
import Youtube from "./admin/youtube";
import SessionList from "./user/sessions";
import Register from "./head/registration";
import ProfilePage from "./user/profilePage";
import Bookings from "./user/bookings";
import Login from "./head/login";
import Dashboard from "./admin/dashboard";
import Cart from "./user/cart";
import Shop from "./user/shop";
import Checkout from "./user/checkout";
import SingleProduct from "./user/singleProductPage"; 
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
              <Route path="/" exact element={<Homepage />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/registration" element={<Register />} />
              <Route path="/profilepage" element={<ProfilePage />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sessions" element={<SessionList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/item/:id" element={<SingleProduct />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </Router>
    </>
  );
}
