import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import { motion } from "framer-motion";
import face from "../../assets/image/face.png";
// import Typed from "typed.js";

const Hero = ({ scrollToTitle }) => {
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [""],
  //     typeSpeed: 10,
  //     loop: false,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div className="hero">
      {/* for image */}
      <section className="hero__img">
        <div>
          <img src={face} alt="hosein moradi" />
        </div>
      </section>

      {/* for text */}
      <section className="hero__text">
        <div className="text__wrapper">
          <span className="body-tag">{"<body>"}</span>
          <div className="text__main">
            <span className="h6-tag">{"<h6>"}</span>
            <h6>Hi</h6>
            <span className="h6-tag">{"</h6>"}</span>

            <span className="h1-tag">{"<h1>"}</span>
            <h1>
              I'm <em>Hosein</em>
            </h1>
            <span className="h1-tag">{"</h1>"}</span>

            <span className="h3-tag">{"<h3>"}</span>
            <h3>Front-End Web Developer</h3>
            <span className="h3-tag">{"</h3>"}</span>

            <span className="p-tag">{"<p>"}</span>
            <p>
              my work is developing interactive and user-friendly website and
              web application, from February 2021.
            </p>
            <span className="p-tag">{"</p>"}</span>
          </div>
          <span className="body-tag">{"</body>"}</span>
        </div>
      </section>

      {/* cta to go next section */}

      <button
        onClick={() => scrollToTitle("contact")}
        type="button"
        className="hero__cta"
      >
        <strong>HIRE ME</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>
  );
};

export default Hero;
