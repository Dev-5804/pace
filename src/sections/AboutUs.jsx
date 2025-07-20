// import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col w-full max-container pt-36 pb-16 px-12 md:px20"
    >
      {/* Main About Section */}
      <div className="flex justify-between items-center max-lg:flex-col gap-10 mb-20">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl lg:text-5xl font-bold lg:max-w-lg leading-tight">
            About <span className="text-coral-red">Our Journey</span>
          </h2>

          <p className="mt-6 lg:mt-8 max-w-lg info-text text-slate-gray leading-7">
            Founded with a passion for innovation and athletic excellence, our
            journey began with a simple mission: to create footwear that
            empowers athletes to push their limits and achieve greatness.
          </p>

          <p className="mt-4 max-w-lg info-text text-slate-gray leading-7">
            From humble beginnings to becoming a global leader in sports
            footwear, we've never stopped innovating and inspiring athletes
            worldwide.
          </p>

          <div className="mt-8 lg:mt-11">
            <Button label="Learn More" />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center max-lg:mt-8">
          <img
            src={shoe8}
            alt="shoe8"
            width={470}
            height={422}
            className="object-contain w-full max-w-[470px] h-auto"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div className="bg-pale-blue p-8 rounded-xl">
          <h3 className="font-palanquin text-3xl font-bold text-slate-900 mb-6">
            Our Mission
          </h3>
          <p className="info-text text-slate-gray leading-7">
            To inspire and enable athletes of all levels to unlock their
            potential through innovative, high-quality footwear that combines
            cutting-edge technology with timeless design.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-xl border">
          <h3 className="font-palanquin text-3xl font-bold text-slate-900 mb-6">
            Our Vision
          </h3>
          <p className="info-text text-slate-gray leading-7">
            To be the world's leading sports brand, creating products that bring
            out the best in every athlete and contribute to a more active,
            healthier world for future generations.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-coral-red rounded-2xl p-8 lg:p-12 mb-20">
        <h3 className="font-palanquin text-3xl lg:text-4xl font-bold text-white text-center mb-12">
          Our Impact in Numbers
        </h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 text-center">
          <div>
            <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              50+
            </h4>
            <p className="text-white/90 font-montserrat">Years of Innovation</p>
          </div>
          <div>
            <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              190+
            </h4>
            <p className="text-white/90 font-montserrat">Countries Worldwide</p>
          </div>
          <div>
            <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              1M+
            </h4>
            <p className="text-white/90 font-montserrat">Athletes Supported</p>
          </div>
          <div>
            <h4 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              500+
            </h4>
            <p className="text-white/90 font-montserrat">Retail Locations</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h3 className="font-palanquin text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">
          Our Core Values
        </h3>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏆</span>
            </div>
            <h4 className="font-palanquin text-xl font-bold text-slate-900 mb-4">
              Excellence
            </h4>
            <p className="info-text text-slate-gray leading-6">
              We strive for excellence in everything we do, from product design
              to customer service.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h4 className="font-palanquin text-xl font-bold text-slate-900 mb-4">
              Innovation
            </h4>
            <p className="info-text text-slate-gray leading-6">
              Continuous innovation drives us to create groundbreaking products
              that push boundaries.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-coral-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🤝</span>
            </div>
            <h4 className="font-palanquin text-xl font-bold text-slate-900 mb-4">
              Community
            </h4>
            <p className="info-text text-slate-gray leading-6">
              We believe in building strong communities and supporting athletes
              at every level.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h3 className="font-palanquin text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
          Meet Our Leadership Team
        </h3>
        <p className="max-w-2xl mx-auto info-text text-slate-gray leading-7 mb-12">
          Our diverse leadership team brings together decades of experience in
          sports, technology, and business to drive our mission forward.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <h4 className="font-palanquin text-xl font-bold text-slate-900 mb-2">
              John Smith
            </h4>
            <p className="text-coral-red font-montserrat font-semibold mb-2">
              Chief Executive Officer
            </p>
            <p className="info-text text-slate-gray text-sm">
              25+ years in sports industry leadership
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <h4 className="font-palanquin text-xl font-bold text-slate-900 mb-2">
              Sarah Johnson
            </h4>
            <p className="text-coral-red font-montserrat font-semibold mb-2">
              Chief Design Officer
            </p>
            <p className="info-text text-slate-gray text-sm">
              Award-winning product designer and innovator
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <h4 className="font-palanquin text-xl font-bold text-slate-900 mb-2">
              Mike Chen
            </h4>
            <p className="text-coral-red font-montserrat font-semibold mb-2">
              Chief Technology Officer
            </p>
            <p className="info-text text-slate-gray text-sm">
              Pioneer in sports technology and performance analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
