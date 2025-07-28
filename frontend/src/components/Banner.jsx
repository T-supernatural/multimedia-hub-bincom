import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example data (replace with props or fetched API data)
const slides = [
  {
    title: "Stream the Unexpected",
    description:
      "A bold invitation to explore unique and surprising content across genres.",
    image: "/background/one.jpg",
    cta: "Start Watching",
  },
  {
    title: "Your World in Media",
    description:
      "Captures the idea of a personalized, immersive media experience.",
    image: "/background/two.jpg",
    cta: "Explore Now",
  },
  {
    title: "Watch. Listen. Explore.",
    description:
      "Simple, rhythmic, and action-driven — perfect for a dynamic multimedia hub.",
    image: "/background/three.jpg",
    cta: "Discover More",
  },
];

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
        className="h-full mySwiper custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-start px-10 md:px-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 max-w-2xl text-black space-y-10">
                <h1 className="text-5xl md:text-7xl font-bold">
                  {slide.title}
                </h1>
                <p className="text-gray-700 font-light text-3xl">
                  {slide.description}
                </p>
                <button className="mt-3 px-6 py-2 text-lg font-medium bg-[#BF0603] text-white  hover:scale-102 transition">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
