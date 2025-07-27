import React, { useEffect, useState } from "react";
import Story from "../components/Story";
import Services from "../components/Services";
import Bts from "../components/Bts";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";

// Hero Values
const values = [
  {
    id: 1,
    title: "Creativity",
    description:
      "We believe in thinking outside the frame. Every project is a blank canvas, and we paint with passion.",
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We don’t settle for “good enough.” Quality is our signature, and we wear it proudly.",
  },
  {
    id: 3,
    title: "Integrity",
    description:
      "What you see is what you get. We operate transparently, honestly, and with purpose.",
  },
  {
    id: 4,
    title: "Collaboration",
    description:
      "Great stories are built together. We work hand-in-hand with our clients to bring visions to life.",
  },
];

// Hero Section
const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % values.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {values.map((value, index) => (
        <div
          key={value.id}
          className={`absolute w-full h-full duration-3000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src="/about.jpg"
            alt={value.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay & Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 bg-opacity-10 to-transparent flex flex-col items-center justify-center text-center p-6 md:p-10">
            <h1 className="text-3xl md:text-7xl md:px-96 font-bold text-white mb-10 capitalize">
              Get to know more about us
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#BF0603] mb-3 logo">
              {value.title}
            </h2>
            <p className="max-w-3xl text-base md:text-3xl text-white leading-relaxed">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main About Page
const About = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <Story />
      <Services />
      <Bts />
      <Testimonial />
      <Newsletter />
    </div>
  );
};

export default About;
