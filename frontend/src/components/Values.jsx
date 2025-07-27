// components/Values.jsx
const values = [
  {
    title: 'Creativity',
    description: 'We believe in thinking outside the frame. Every project is a blank canvas, and we paint with passion.',
  },
  {
    title: 'Excellence',
    description: 'We don’t settle for “good enough.” Quality is our signature, and we wear it proudly.',
  },
  {
    title: 'Integrity',
    description: 'What you see is what you get. We operate transparently, honestly, and with purpose.',
  },
  {
    title: 'Collaboration',
    description: 'Great stories are built together. We work hand-in-hand with our clients to bring visions to life.',
  },
];

const Values = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Core Values</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
