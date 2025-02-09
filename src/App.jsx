import React from "react";
import Mainsection from "./components/Mainsection";
import Features from "./components/Features";
import SectionTitle from "./components/SectionTitle";
import PricingPlans from "./components/PricingPlans";
import EcommercePlans from "./components/EcommercePlans";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Mainsection />
      <div className="px-4 sm:px-6 lg:px-8">
        <Features />
        <SectionTitle title="Business Website Price"/>
        <PricingPlans />
        <SectionTitle title="e-Commerce Website Price" />
        <EcommercePlans />
      </div>
    </>
  );
};

export default App;

