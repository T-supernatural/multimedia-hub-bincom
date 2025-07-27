// components/Bts.jsx
const behindTheScenes = [
  {
    title: "Lights, Camera, Action!",
    description:
      "A quick look at our team prepping the set before a major shoot.",
    imageUrl: "/podcast-1.jpg",
  },
  {
    title: "Editing Magic",
    description:
      "Late nights spent perfecting every frame — post-production in full throttle.",
    imageUrl: "/podcast-1.jpg",
  },
  {
    title: "On Location",
    description:
      "We go where the story takes us. This one’s from a shoot in Lagos.",
    imageUrl: "/podcast-1.jpg",
  },
  {
    title: "Creative Chaos",
    description:
      "Mood boards, whiteboards, pizza boxes. The birth of ideas isn’t always pretty.",
    imageUrl: "/podcast-1.jpg",
  },
];

const Bts = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-8xl font-light mb-16 text-center text-gray-700 logo">Behind the Scenes</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {behindTheScenes.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = '/no-image-icon.png')}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bts;
