import React from "react";
import { data } from "../utilis/data";
import { TbArrowRightSquare } from "react-icons/tb";

const Home = () => {
  const { homeImageUrl, aboutMe } = data;
  return (
    <div>
      <div>
        <div>
          <h2>I'm a Front End Developer</h2>
          <p>{aboutMe}</p>
          <div>
            <button>
              Portfolio
              <span>
                <TbArrowRightSquare />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={homeImageUrl} alt="photos of mine" />
        </div>
      </div>
    </div>
  );
};

export default Home;
