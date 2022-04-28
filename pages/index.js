import React from "react";
import { Nav } from "../components/Navbar";
import { Header } from "../components/Header";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Partner } from "../components/partner";
import { AboutUs } from "../components/AboutUs";

const index = () => {
  return (
    <div>
      <Nav />
      <Header />
      <AboutUs />
      <Partner />
      <Faq />
      <Footer />
    </div>
  );
};

export default index;
