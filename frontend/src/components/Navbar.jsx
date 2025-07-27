import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 left-0 bg-white text-gray-500 shadow-md z-50">
        <div className="flex items-center justify-between py-5 px-6 md:pr-20 md:pl-10">
          <Link
            to="/"
            className="text-black text-3xl md:text-4xl font-black logo"
            aria-label="Go to home"
          >
            Media<span className="text-[#BF0603]">Hub.</span>
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 text-xl md:text-2xl font-light">
            <li className="hover:text-black transition duration-300 hover:-translate-y-0.5 hover:font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black transition duration-300 hover:-translate-y-0.5 hover:font-semibold">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-black transition duration-300 hover:-translate-y-0.5 hover:font-semibold">
              <Link to="/media">Media</Link>
            </li>
            <li className="hover:text-black transition duration-300 hover:-translate-y-0.5 hover:font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* User Icon */}
          <Link
            to="/account"
            className="hidden md:block text-4xl hover:text-black transition duration-300 hover:-translate-y-0.5"
          >
            <i className="fa-regular fa-circle-user"></i>
          </Link>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-3xl text-[#780000] z-50"
            onClick={() => setIsOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Slide-in Sidebar (Right side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <span className="text-[#780000] text-2xl font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6 text-lg font-medium">
          <li onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/media">Media</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/account">
              <i className="fa-regular fa-circle-user text-2xl"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
