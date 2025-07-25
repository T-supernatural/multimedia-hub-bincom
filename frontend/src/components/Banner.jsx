import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example data (replace with props or fetched API data)
const slides = [
  {
    title: "Blue Surf",
    genre: "Drama",
    rating: 3,
    year: "2019",
    pg: "PG-13",
    description:
      "Mae Holland seizes the opportunity of a lifetime when she lands a job with the world’s most powerful technology and social media company.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Sky Watch",
    genre: "Sci-Fi",
    rating: 4,
    year: "2023",
    pg: "PG",
    description:
      "A boy finds a secret government drone and uses it to take down a dark agency controlling the skies.",
    image:
      "https://images.unsplash.com/photo-1549921296-3c228f60fa9b?auto=format&fit=crop&w=1920&q=80",
  },
];

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-start px-10 md:px-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 max-w-xl text-white space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold">
                  {slide.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm md:text-base text-gray-300">
                  <span className="uppercase">{slide.genre}</span>
                  <span>
                    {"★".repeat(slide.rating)}
                    {"☆".repeat(5 - slide.rating)}
                  </span>
                  <span>{slide.year}</span>
                  <span className="border px-1.5 py-0.5 rounded border-gray-400">
                    {slide.pg}
                  </span>
                </div>
                <p className="text-gray-200">{slide.description}</p>
                <button className="mt-3 px-6 py-2 text-lg font-medium bg-white text-black rounded hover:bg-gray-200 transition">
                  ▶ Watch Now
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
