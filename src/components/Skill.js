import React from "react";
import { data } from "../utilis/data";

const Skill = () => {
  const { skills } = data;
  return (
    <div

      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="text-l">
            I have hands-on experience with the following technologies:
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {skills.map((skill, index) => {
              const { technology, list } = skill;
              return (
                <div
                  key={index}
                  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
                >
                  <img
                    src={list}
                    alt="list of skills"
                    className="w-20 mx-auto"
                  />
                  <p className="mt-4">{technology}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
