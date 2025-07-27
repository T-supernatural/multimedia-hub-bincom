import React from "react";
import Mission from "../components/Mission";
import Story from "../components/Story";
import Services from "../components/Services";
import Values from "../components/Values";
import Bts from "../components/Bts";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Funfacts from "../components/Funfacts";

const About = () => {
  return (
    <div>
        <HeroSection />
        <Mission />
        <Story />
        <Services />
        <Values />
        <Bts />
        <Testimonial />
        <Newsletter />
        <Funfacts />
    </div>
  );
};

export default About;

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Get to Know Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Discover the heart and hustle behind <span className="text-red-400 font-medium">MultimediaHub</span> — our story, our mission, and the team turning creativity into impact.
        </p>
      </div>
      {/* Decorative Background Blur */}
      <div
        className="absolute -top-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none animate-pulse"
        aria-hidden="true"
      />
    </section>
  );
};

