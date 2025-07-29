import React from "react";

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("http://localhost:1000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      const errorData = await response.json();
      alert("Error: " + JSON.stringify(errorData));
    }
  } catch (err) {
    alert("Something went wrong!");
  }
};


const Form = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-7xl font-light capitalize text-gray-700 mb-10 logo">
          Send us a message...
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 "
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-600 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 "
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="subject" className="text-sm text-gray-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 "
              placeholder="Let's work together!"
              required
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="text-sm text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 "
              placeholder="Tell us what’s on your mind..."
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#BF0603] text-white font-semibold px-6 py-3 rounded-md hover:scale-102 duration-100 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
