import "./Home.css";
import About from "../layouts/About";
import { Button } from "react-bootstrap";
import Contact from "../layouts/Contact";
import Education from "../layouts/Education";
import Experience from "../layouts/Experience";
import React from "react";
import Skills from "../layouts/Skills";
// import { useMediaQuery } from "react-responsive";

function Home({
  aboutRef,
  contactRef,
  educationRef,
  expRef,
  homeRef,
  skillsRef,
}) {
  // const isSmallScreen = useMediaQuery({ maxWidth: 576 });

  const downloadCV = () => {
    const pdfUrl = "AshmaMaharjan.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="main d-flex align-items-center" ref={homeRef}>
        <div className="banner-content w-100">
          <div className="banner">
            <h1 className="main-heading mb-0">Hello!</h1>
            <h1 aria-label="Hi! I'm a developer" className="main-heading2">
              I'm a&nbsp;<span className="typewriter"></span>
            </h1>
            <p className="mt-4 p-text-main p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* <Button className="mt-4" size={isSmallScreen ? "sm" : ""}>
            Download CV
          </Button> */}
            <Button
              className="mt-2"
              style={{ backgroundColor: "#2c98f0" }}
              onClick={downloadCV}
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className="main-banner"></div>
      </div>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={educationRef}>
        <Education />
      </section>
      <section ref={expRef}>
        <Experience />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
}

export default Home;
