import Home from "../pages/Home";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "react-responsive-sidebar";
import "./SideMenu.css";
import profile from "../assets/images/profile.jpg";

function SideMenu() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const expRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExp = () => {
    if (expRef.current) {
      expRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const items = [
    <div className="image-container">
      <img alt="Loading ..." src={profile} className="portfolio-img" />
      <h3 className="mt-3 portfolio-name mb-2">Ashma Maharjan</h3>
      <span className="small-text small-text-custom">Web Developer</span>
    </div>,
    <nav>
      <ul>
        <li className="text-center mb-4">
          <Link className="menu-item" onClick={scrollToHome}>
            Home
          </Link>
        </li>
        <li className="text-center mb-4">
          <Link className="menu-item" onClick={scrollToAbout}>
            About
          </Link>
        </li>
        <li className="text-center mb-4">
          <Link className="menu-item" onClick={scrollToSkills}>
            Skills
          </Link>
        </li>
        <li className="text-center mb-4">
          <Link className="menu-item" onClick={scrollToEducation}>
            Education
          </Link>
        </li>
        <li className="text-center mb-4">
          <Link className="menu-item" onClick={scrollToExp}>
            Experience
          </Link>
        </li>
        <li className="text-center mb-4">
          <Link className="menu-item" onClick={scrollToContact}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>,
  ];

  return (
    <>
      <Sidebar
        content={items}
        background="#f2f3f7"
        toggleIconColor="rgba(0, 0, 0, 0.7)"
        color="rgba(0, 0, 0, 0.7)"
      >
        <Home
          aboutRef={aboutRef}
          contactRef={contactRef}
          homeRef={homeRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          expRef={expRef}
        />
      </Sidebar>
    </>
  );
}

export default SideMenu;
