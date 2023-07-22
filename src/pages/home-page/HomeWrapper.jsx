import React, { lazy } from "react";

const About = lazy(() => import("../../components/About"));
const Experience = lazy(() => import("../../components/Experience"));
const Feedbacks = lazy(() => import("../../components/Feedbacks"));
const Hero = lazy(() => import("../../components/Hero"));
const Navbar = lazy(() => import("../../components/Navbar"));
const Works = lazy(() => import("../../components/Works"));
const Contact = lazy(() => import("../../components/Contact"));
const StarsCanvas = lazy(() => import("../../components/canvas/Stars"));

const HomeWrapper = () => {
  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default HomeWrapper;
