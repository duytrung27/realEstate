"use client";

import CustomerComment from "./components/CustomerComment";
import DreamHomePart from "./components/DreamHomePart";
import Footer from "./components/Footer";
import MainBackgroundPart from "./components/MainBackgroundPart";
import Nav from "./components/Nav";
import RealAppraisalServicesPart from "./components/RealAppraisalServicesPart";
import RentalPart from "./components/RentalPart";
import RevealOnScroll from "./components/RevealOnScroll";
import ServiceSlidePart from "./components/ServiceSlidePart";
import SolutionPart from "./components/SolutionPart";

import "swiper/css";

export default function Home() {
  return (
    <main>
      <Nav />
      <MainBackgroundPart />
      <RevealOnScroll>
        <ServiceSlidePart />
      </RevealOnScroll>
      <RevealOnScroll>
        <SolutionPart />
      </RevealOnScroll>
      <RevealOnScroll>
        <RentalPart />
      </RevealOnScroll>
      <RevealOnScroll>
        <RealAppraisalServicesPart />
      </RevealOnScroll>
      <RevealOnScroll>
        <DreamHomePart />
      </RevealOnScroll>
      <RevealOnScroll>
        <CustomerComment />
      </RevealOnScroll>
      <Footer />
    </main>
  );
}
