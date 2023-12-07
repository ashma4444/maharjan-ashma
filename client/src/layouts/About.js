import "./About.css";
import {
  faCoffee,
  faGlobe,
  faDatabase,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SmallCard from "../components/SmallCard";

function About() {
  const smallCardContent = [
    {
      borderColor: "#2c98f0",
      icon: faCoffee,
      iconColor: "#2c98f0",
      text: "Web Design",
    },
    {
      borderColor: "#ec5453",
      icon: faGlobe,
      iconColor: "#ec5453",
      text: "Web Development",
    },
    {
      borderColor: "#a84cb8",
      icon: faDatabase,
      iconColor: "#a84cb8",
      text: "Database",
    },
    {
      borderColor: "#2fa499",
      icon: faDisplay,
      iconColor: "#2fa499",
      text: "Software",
    },
  ];
  return (
    <>
      <div className="about">
        <h3 className="secondary-heading">About me</h3>
        <h1 className="primary-heading">Who am I?</h1>
        <p className="p-text format-text">
          Hi! I am Ashma Maharjan. Recently, I have completed my Bacehlors
          Degree in Computing from Islington College, Nepal. I have worked as
          Frontend Developer in different companies. Other than that, I also
          have hands-on experience on backend using Express, Python and so on. Similarly, I have done few full-stack
          projects using various technologies. Aditonally, I have also taken 3
          months MERN stack training from Broadway Infosys.
        </p>

        <div className="d-flex justify-content-between flex-wrap">
          {smallCardContent.map((item, index) => (
            <SmallCard
              key={index}
              borderColor={item.borderColor}
              icon={item.icon}
              iconColor={item.iconColor}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
