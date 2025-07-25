import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed w-full top-0 left-0 py-5 pl-10 pr-20 bg-white text-gray-500 shadow-md z-50 ">
      <div className="text-[#780000] text-4xl font-bold logo">
        Multimedia<span className="text-[#003049]">Hub.</span>
      </div>
      <ul className="flex space-x-7 text-2xl font-semibold">
        <li className="hover:text-black hover:transition duration-300 hover:-translate-y-0.5">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-black hover:transition duration-300 hover:-translate-y-0.5">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:text-black hover:transition duration-300 hover:-translate-y-0.5">
          <Link to={"/media"}>Media</Link>
        </li>
        <li className="hover:text-black hover:transition duration-300 hover:-translate-y-0.5">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Link to={"/account"} className="text-5xl hover:text-black hover:transition duration-300 hover:-translate-y-0.5">
        <i class="fa-regular fa-circle-user"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
