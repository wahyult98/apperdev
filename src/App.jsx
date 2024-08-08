/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Content from "./components/Content";
import BannerCta from "./components/BannerCta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-black">
      <Navbar />
      <Banner />
      <About />
      <Content />
      <BannerCta />
      <Footer />
    </div>
  );
}

export default App;
