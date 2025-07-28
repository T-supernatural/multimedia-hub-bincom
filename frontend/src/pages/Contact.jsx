import React from 'react'
import Form from '../components/Form';
import Newsletter from '../components/Newsletter';
import Faqs from '../components/Faqs';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <Form />
      <Faqs />
      <Newsletter />
    </div>
  )
}

export default Contact



const ContactHero = () => {
  return (
    <section className="relative w-full h-[80vh] bg-[url('/contact.png')] bg-cover bg-center text-black flex items-center justify-center px-4 text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-8xl font-bold mb-6">Let’s Talk </h1>
        <p className="text-lg md:text-2xl">
          Have a project in mind? A question? Or just want to say hello? Drop us a message and we’ll get back ASAP.
        </p>
      </div>
    </section>
  );
};

