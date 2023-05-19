import HomeImage from "../resources/bg_remove_portfolio.png";
import Projects1 from "../resources/projects.png";
import Projects2 from "../resources/projects1.png";
// import HomeImage1 from "../resources/bg_image.jpg";

export const data = {
  links: [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
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
};
