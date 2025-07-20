// import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const OurServices = () => {
  return (
    <section id="services" className="max-container pt-36 pb-16 px-20">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <h2 className="font-palanquin text-4xl lg:text-5xl font-bold max-w-lg leading-tight">
          Our <span className="text-coral-red">Services</span>
        </h2>
        <p className="mt-6 lg:mt-8 max-w-2xl info-text text-slate-gray leading-7">
          We provide comprehensive services to ensure you get the best
          experience with our products. From fast delivery to expert support,
          we have got you covered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 lg:mt-20 text-center">
        <h3 className="font-palanquin text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
          Need Help?
        </h3>
        <p className="max-w-lg mx-auto info-text text-slate-gray leading-7 mb-6">
          Our customer support team is available 24/7 to assist you with any
          questions or concerns.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-coral-red text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-coral-red/90 transition-colors">
            Contact Support
          </button>
          <button className="border border-slate-gray text-slate-gray px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-slate-gray hover:text-white transition-colors">
            View FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
