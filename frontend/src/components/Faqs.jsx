import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer video production, photography, graphic design, content editing, and digital storytelling tailored to your brand's voice.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Depends on the scope, but most projects take 1–3 weeks from concept to delivery. We also offer express packages for tighter deadlines.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely. We include 2 free rounds of revisions in every project. Additional edits can be done at a small fee.",
  },
  {
    question: "Do you travel for shoots?",
    answer:
      "Yes! We’re based in Nigeria but open to local and international shoots depending on availability and budget.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-7xl font-light text-gray-700 mb-10 text-center logo">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
