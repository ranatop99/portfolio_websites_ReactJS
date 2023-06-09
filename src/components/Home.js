import React from "react";
import { data } from "../utilis/data";
import { TbArrowRightSquare } from "react-icons/tb";

const Home = () => {
  const { homeImageUrl, aboutMe } = data;
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-16">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full p-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-6xl text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md"> {aboutMe}</p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowRightSquare size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={homeImageUrl}
            alt="profile of mine"
            className="rounded-2xl mx-auto w-2/3 md:w-full bg-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
