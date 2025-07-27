// components/Testimonial.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Adeola A.',
    feedback: 'MultimediaHub delivered exactly what we needed — visually stunning, technically flawless.',
    title: 'Creative Director, Vibe Studios',
  },
  {
    name: 'James K.',
    feedback: 'Top-notch editing, fast turnaround, and a passionate team. Highly recommended!',
    title: 'Content Creator',
  },
  {
    name: 'Chioma O.',
    feedback: 'Their storytelling brought our brand to life. Couldn’t have asked for more.',
    title: 'Marketing Lead, Zenco',
  },
  {
    name: 'Femi D.',
    feedback: 'Professional, talented, and fun to work with. MultimediaHub is the real deal.',
    title: 'Founder, Visionary Films',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-8xl font-light text-gray-700 mb-12 logo">What Our Clients Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" p-10 max-w-3xl mx-auto">
                <p className="text-lg italic text-gray-700">“{item.feedback}”</p>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-[#780000]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
