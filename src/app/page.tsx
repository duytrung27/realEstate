"use client";

import CustomerComment from "./components/CustomerComment";
import OurBestHome from "./components/OurBestHome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import OurValue from "./components/OurValue";
import DreamerHome from "./components/DreamerHome";
import ServiceSlide from "./components/ServiceSlide";
import Solution from "./components/Solution";

import "animate.css";
import "swiper/css";

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <ServiceSlide />
      <Solution />
      <DreamerHome />
      <OurValue />
      <OurBestHome />
      <CustomerComment />
      <Footer />
    </main>
  );
}
