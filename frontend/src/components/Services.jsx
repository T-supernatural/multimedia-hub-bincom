// components/Services.jsx
import {
  FaVideo,
  FaPhotoVideo,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    icon: <FaVideo className="text-4xl text-black" />,
    title: "Video Production",
    description:
      "From concept to final cut, we produce cinematic video content that captivates audiences.",
  },
  {
    icon: <FaPhotoVideo className="text-4xl text-black" />,
    title: "Photography",
    description:
      "Professional photography that captures the essence of every moment, project, or campaign.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-black" />,
    title: "Creative Design",
    description:
      "We craft visually stunning designs for digital and print, perfectly tailored to your brand.",
  },
  {
    icon: <FaBullhorn className="text-4xl text-black" />,
    title: "Digital Marketing",
    description:
      "Campaigns, content, and strategy — everything you need to amplify your voice online.",
  },
];

const Services = () => {
  return (
    <section className="text-black py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-8xl text-gray-700 font-light mb-18 logo">What We Do</h2>
        <div className="grid gap-10  md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 hover:scale-105 transition-all duration-300 shadow-md"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
