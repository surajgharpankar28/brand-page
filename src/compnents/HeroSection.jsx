/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <main className="hero bg-gray-50 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Hero Content */}
        <div className="hero-content max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-gray-600 mb-8">
            YOUR FEET CARRY YOU THROUGH LIFE—TREAT THEM TO THE FINEST SHOES.
            EXPERIENCE UNMATCHED COMFORT AND DURABILITY WITH EVERY STEP.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mb-8">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Shop Now
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Category
            </button>
          </div>

          {/* Shopping Section */}
          <div className="shopping">
            <p className="text-gray-500 text-sm mb-2">Also Available On</p>
            <div className="brand-icon flex justify-center md:justify-start gap-4">
              <img
                src="/images/flipkart.png"
                alt="Flipkart"
                className="h-8 hover:opacity-75 transition-opacity"
              />
              <img
                src="/images/amazon.png"
                alt="Amazon"
                className="h-8 hover:opacity-75 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image mt-12 md:mt-0">
          <img
            src="/images/hero-image.png"
            alt="Hero Shoes"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
