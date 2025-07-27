// components/Story.jsx
const Story = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-6xl font-light text-gray-700 mb-6 logo">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            It all started with a passion for storytelling and a camera in hand.
            What began as a small collective of creatives capturing local events
            has now become a full-blown multimedia movement.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            From documentaries to digital campaigns, we’ve grown with the
            mission to create powerful media that moves, informs, and inspires.
            And we're just getting started.
          </p>
        </div>

        {/* Image or media placeholder */}
        <div className="w-full h-72 md:h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <img
            src="/story.png" // swap this with your image path
            alt="Our beginnings"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
