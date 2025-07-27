import React from "react";

const features = [
  {
    icon: <i className="fa-solid fa-photo-film"></i>,
    title: "High-Quality Uploads",
    description:
      "Showcase your visuals and audio in full quality, zero compromise.",
    classes: "md:row-span-2 md:col-span-2",
  },
  {
    icon: <i className="fa-solid fa-play-circle"></i>,
    title: "Seamless Playback",
    description: "Built-in responsive player for both video and audio formats.",
  },
  {
    icon: <i className="fa-solid fa-tags"></i>,
    title: "Smart Categorization",
    description: "Tag, group, and filter media content with ease and clarity.",
  },
  {
    icon: <i className="fa-solid fa-user-gear"></i>,
    title: "Creator Dashboard",
    description:
      "Upload, track, and manage your content from a sleek dashboard.",
    classes: "md:col-span-2",
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-10 md:px-4">
      <h2 className="text-2xl md:text-6xl font-light text-center mb-14 text-gray-700 logo">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-100 shadow-md hover:shadow-lg 
              ${index === 0 ? "md:pt-18" : ""} p-10 hover:transition hover:duration-100 hover:scale-102 flex flex-col items-center gap-4 ${
              feature.classes || ""
            }`}
          >
            {/* Add aria-label for accessibility */}
            {React.cloneElement(feature.icon, {
              "aria-label": feature.title,
              className: `${feature.icon.props.className} text-[#BF0603] ${
                index == 0 ? "md:text-8xl" : "text-3xl"
              }`.trim(),
            })}
            <h3
              className={`text-2xl font-semibold text-gray-700 text-center ${
                index === 0 ? "md:text-6xl" : ""
              }`}
            >
              {feature.title}
            </h3>
            <p
              className={`text-gray-500 text-base text-center ${
                index === 0 ? "md:text-4xl" : ""
              }`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
