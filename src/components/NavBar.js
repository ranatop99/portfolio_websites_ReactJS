import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { data } from "../utilis/data";
const NavBar = () => {
  const { links } = data;
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-2">
      <div>
        <h1 className="text-4xl font-signature ml-2">Rana</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link, id) => {
          const { component, url } = link;
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={url}>{component}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link, id) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {link.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
