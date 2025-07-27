import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-gray-50 text-gray-500 text-xl px-6 pt-10 pb-5 mt-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* About Section */}
        <div>
          <div className="text-black text-3xl md:text-4xl font-black logo">
            Media<span className="text-[#BF0603]">Hub.</span>
          </div>
          <p className="">
            Your go-to platform for curated media. Experience audio, video,
            photos, and more — all in one hub.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="/media" className="hover:text-black">
                Media
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">Contact</h4>
          <ul className="space-y-2">
            <li>Email: support@mediahub.com</li>
            <li>Phone: +234 810 000 0000</li>
            <li>Address: 123 Lagos Road, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-black">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://open.spotify.com/" className="hover:text-black">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="https://twitter.com/" className="hover:text-black">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.tiktok.com/" className="hover:text-black">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/" className="hover:text-black">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-5 md:mx-10 border-gray-200" />

      <p className="text-center text-xl">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-black font-black logo">
          Media<span className="text-[#BF0603]">Hub. </span>
        </span>
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
