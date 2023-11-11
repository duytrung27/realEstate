"use client";

import CustomerComment from "./components/CustomerComment";
import DreamHomePart from "./components/DreamHomePart";
import Footer from "./components/Footer";
import MainBackgroundPart from "./components/MainBackgroundPart";
import Nav from "./components/Nav";
import RealAppraisalServicesPart from "./components/RealAppraisalServicesPart";
import RentalPart from "./components/RentalPart";
import ServiceSlidePart from "./components/ServiceSlidePart";
import SolutionPart from "./components/SolutionPart";

export default function Home() {
  return (
    <main>
      <Nav />
      <MainBackgroundPart />
      <ServiceSlidePart />
      <SolutionPart />
      <RentalPart />
      <RealAppraisalServicesPart />
      <DreamHomePart />
      <CustomerComment />
      <Footer />
    </main>
  );
}
