import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Working from "./sections/Working";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import StatsSection from "./sections/StatsSection";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <StatsSection />
      <About />
      <Services />
      <Portfolio />
      <Working />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
