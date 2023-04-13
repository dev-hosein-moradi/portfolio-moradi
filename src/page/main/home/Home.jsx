import React, { useEffect, useState } from "react";
import Hero from "../../../components/hero/Hero";
import Navbar from "../../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  const [aboutOffset, setAboutOffset] = useState(null);
  const [projectOffset, setProjectOffset] = useState(null);
  const [contactOffset, setContactOffset] = useState(null);

  /* get offsetTop of components */
  useEffect(() => {
    const about = document.querySelector(".about").getBoundingClientRect().top;
    about && setAboutOffset(about);

    const project = document
      .querySelector(".myProject")
      .getBoundingClientRect().top;
    project && setProjectOffset(project);

    const contact = document
      .querySelector(".contact")
      .getBoundingClientRect().top;
    contact && setContactOffset(contact);
  }, []);

  /* scroll to clicked component */
  const scrollToTitle = (location) => {
    window.scrollTo({
      top:
        location === "about"
          ? aboutOffset
          : location === "project"
          ? projectOffset
          : contactOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {/* navbar section */}
      <Navbar scrollToTitle={scrollToTitle} />

      {/* hero section */}
      <Hero scrollToTitle={scrollToTitle} />
    </div>
  );
};

export default Home;
