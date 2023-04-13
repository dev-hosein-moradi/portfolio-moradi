import React, { lazy, useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SvgHtml = lazy(() => import("../../../assets/SVGs/SvgHtml"));
const SvgCss = lazy(() => import("../../../assets/SVGs/SvgCss"));
const SvgJs = lazy(() => import("../../../assets/SVGs/SvgJs"));
const SvgReact = lazy(() => import("../../../assets/SVGs/SvgReact"));
const SvgRedux = lazy(() => import("../../../assets/SVGs/SvgRedux"));
const SvgGit = lazy(() => import("../../../assets/SVGs/SvgGit"));
const SvgSocket = lazy(() => import("../../../assets/SVGs/SvgSocket"));
const SvgNodeJs = lazy(() => import("../../../assets/SVGs/SvgNodeJs"));
const SvgExpressJs = lazy(() => import("../../../assets/SVGs/SvgExpressJs"));
const SvgMongoDB = lazy(() => import("../../../assets/SVGs/SvgMongoDB"));
const SvgGraduate = lazy(() => import("../../../assets/SVGs/SvgGraduate"));
const SvgLink = lazy(() => import("../../../assets/SVGs/SvgLink"));
const SvgAward = lazy(() => import("../../../assets/SVGs/SvgAward"));

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about" id="About-me">
      <div className="about__bg1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="about__bg2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="about__bg3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1
        className="about__title"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        ABOUT ME
      </h1>
      <div
        className="about__bio"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <p>
          Front-End Developer with more than three years of experience in this
          industry based in shiraz, iran. Proficiant in HTML, CSS, JavaScript
          and ReactJS. Able to create fully responsive, intractive and
          user-friendly web applications with ReactJs. Experience in work with
          Redux, restAPI, NodeJS, ExpressJs and MongoDB.
        </p>
      </div>

      <section className="about__skills-icon">
        {/* frontend */}
        <div
          className="skills__wrapper"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3>Front-End</h3>

          <div className="skills__box">
            <span>
              <SvgHtml />
            </span>
            <span>
              <SvgCss />
            </span>
            <span>
              <SvgJs />
            </span>
            <span>
              <SvgReact />
            </span>
            <span>
              <SvgRedux />
            </span>
          </div>
        </div>

        {/* other skills */}
        <div
          className="skills__wrapper"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3>Other</h3>

          <div className="skills__box">
            <span>
              <SvgGit />
            </span>
            <span>
              <SvgSocket />
            </span>
          </div>
        </div>

        {/* backend */}
        <div
          className="skills__wrapper"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="400"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3>Back-End</h3>

          <div className="skills__box">
            <span>
              <SvgNodeJs />
            </span>
            <span>
              <SvgExpressJs />
            </span>
            <span>
              <SvgMongoDB />
            </span>
          </div>
        </div>
      </section>

      <hr
        style={{
          width: "100%",
          borderColor: "#5E548E",
          margin: "3rem 0",
          opacity: ".4",
        }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      />

      {/* my course */}
      <section className="about__course">
        <h3
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Courses
        </h3>

        <div className="course__wrapper">
          <div
            className="course__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="course__desc">
              <SvgGraduate />
              <p>The Complete 2023 Web Development Bootcamp</p>
            </div>
            <div className="course__cta">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
              >
                Udemy <SvgLink />
              </a>
            </div>
          </div>

          <div
            className="course__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="course__desc">
              <SvgGraduate />
              <p>
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </p>
            </div>
            <div className="course__cta">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              >
                Udemy <SvgLink />
              </a>
            </div>
          </div>

          <div
            className="course__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="course__desc">
              <SvgGraduate />
              <p>JavaScript Algorithms and Data Structures Certification</p>
            </div>
            <div className="course__cta">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
              >
                FreeCodeCamp <SvgLink />
              </a>
            </div>
          </div>

          <div
            className="course__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="course__desc">
              <SvgGraduate />
              <p>Responsive Web Design Certification</p>
            </div>
            <div className="course__cta">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
              >
                FreeCodeCamp <SvgLink />
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr
        style={{
          width: "100%",
          borderColor: "#5E548E",
          margin: "3rem 0",
          opacity: ".4",
        }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      />

      {/* my certificate */}
      <section className="about__certificate">
        <h3
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Certificate
        </h3>

        <div className="certificate__wrapper">
          <div
            className="certificate__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="certificate__desc">
              <SvgAward />
              <p>JavaScript Algorithms and Data Structures Certification</p>
            </div>
            <div className="certificate__cta">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
              >
                FreeCodeCamp <SvgLink />
              </a>
            </div>
          </div>

          <div
            className="certificate__box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="certificate__desc">
              <SvgAward />
              <p>Responsive Web Design Certification</p>
            </div>
            <div className="certificate__cta">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
              >
                FreeCodeCamp <SvgLink />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
