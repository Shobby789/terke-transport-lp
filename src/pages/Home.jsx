import React from "react";
import Navbar from "../components/Global/Navbar";
import Hero from "../components/Home/Hero";
import ShipmentTracking from "../components/Home/ShipmentTracking";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import AboutUs from "../components/Home/AboutUs";
import OurServicesSection from "../components/Home/OurServicesSection";
import ServicesAccordion from "../components/Home/ServicesAccordion";
import OurOffices from "../components/Home/OurOffices";
import Footer from "../components/Global/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShipmentTracking />
      <WhyChooseUs />
      <AboutUs />
      <OurServicesSection />
      <ServicesAccordion />
      <OurOffices />
      <Footer />
    </div>
  );
};

export default Home;
