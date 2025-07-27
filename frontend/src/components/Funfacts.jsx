// components/Funfacts.jsx
const facts = [
  "We drink an average of 5 cups of coffee per day ☕",
  "Our mascot is literally a rubber duck named Quincy 🐤",
  "We once edited a video for a wedding... on a boat 🚤",
  "Our founder started editing videos on a Nokia phone 🎞️",
  "One team member can rap every verse of ‘Lose Yourself’ 🎤",
  "We love cold pizza more than hot pizza 🍕 (don’t judge)",
  "Our office playlist has 70s funk next to Afrobeat 🎶",
  "We believe bloopers are better than the actual content 😅",
  "We’ve never lost a file (thanks to 3 backups) 💾",
  "Friday is officially Meme Day on our Slack 💬",
];

const Funfacts = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">10 Random Facts About Us</h2>
        <ul className="grid gap-4 text-left md:grid-cols-2 text-lg text-gray-700">
          {facts.map((fact, index) => (
            <li key={index} className="bg-white shadow-md p-4 rounded-md hover:bg-gray-50 transition">
              {index + 1}. {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Funfacts;
