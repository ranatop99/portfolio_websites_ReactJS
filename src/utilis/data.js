import HomeImage from "../resources/bg_remove_portfolio.png";
import Projects1 from "../resources/projects.png";
import Projects2 from "../resources/projects1.png";
// import HomeImage1 from "../resources/bg_image.jpg";
import Html from "../resources/skills/html.png";
import JavaScript from "../resources/skills/javascript.png";
import Tailwind from "../resources/skills/tailwind.png";
import React from "../resources/skills/react.png";
import Css from "../resources/skills/css.png";
import NextJS from "../resources/skills/nextjs.png";
import Github from "../resources/skills/github.png";

export const data = {
  links: [
    {
      id: 1,
      component: "home",
      url: "/"
    },
    {
      id: 2,
      component: "About",
      url: "/about"
    },
    {
      id: 3,
      component: "portfolio",
      url: "/portfolio"
    },
    {
      id: 4,
      component: "skills",
      url: "/skills"

    },
    {
      id: 5,
      component: "contact",
      url: "/contact"
    },
  ],
  homeImageUrl: HomeImage,
  aboutMe:
    "Experienced front-end developer with one year of expertise in HTML, CSS, and JavaScript. Dedicated to implementing responsive design principles in web development. Passionate about utilizing technologies such as React, Tailwind CSS, and Figma to create engaging web applications.",

  portfolios: [
    {
      title: "Web App for Brave Gurkha",
      imageUrl: Projects1,
    },
    {
      title: "React App",
      imageUrl: Projects2,
    },
    {
      title: "React App2",
      imageUrl: Projects2,
    },
  ],
  skills: [
    {
      id: 1,
      technology: "HTML",
      list: Html,
    },
    {
      id: 2,
      technology: "CSS",
      list: Css,
    },
    {
      id: 3,
      technology: "JavaScript",
      list: JavaScript,
    },
    {
      id: 4,
      technology: "React",
      list: React,
    },
    {
      id: 5,
      technology: "Tailwind",
      list: Tailwind,
    },
    {
      id: 6,
      technology: "Github",
      list: Github,
    },
    {
      id: 7,
      technology: "NextJS",
      list: NextJS,
    },
  ],
};
