import React, { lazy, useEffect } from "react";
import "./myProject.css";
import Aos from "aos";
import "aos/dist/aos.css";

import moboShare from "../../../assets/image/moboShare.webp";
import mrAghrabeh from "../../../assets/image/mrAghrabeh.webp";
const SvgReact = lazy(() => import("../../../assets/SVGs/SvgReact"));
const SvgRedux = lazy(() => import("../../../assets/SVGs/SvgRedux"));
const SvgSocket = lazy(() => import("../../../assets/SVGs/SvgSocket"));
const SvgNodeJs = lazy(() => import("../../../assets/SVGs/SvgNodeJs"));
const SvgExpressJs = lazy(() => import("../../../assets/SVGs/SvgExpressJs"));
const SvgMongoDB = lazy(() => import("../../../assets/SVGs/SvgMongoDB"));
const SvgLink = lazy(() => import("../../../assets/SVGs/SvgLink"));

const MyProject = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="myProject" id="Projects">
      <h1
        className="projects__title"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        My Projects
      </h1>

      <section className="box__wrapper">
        {/* box for moboShare */}
        <div
          className="project__box"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="101"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="project__image">
            <img src={moboShare} alt="mobo share" />
          </div>

          <div className="project__desc">
            <p>
              Moboshare is a social network website that developed by react Js.
              users can follow their friends, post their events and real-time
              chat. this is a MERN stack applications.
            </p>
          </div>

          <div className="project__technolegies">
            <span>
              <SvgReact />
            </span>

            <span>
              <SvgRedux />
            </span>

            <span>
              <SvgSocket />
            </span>

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

          <div className="project__cta">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://moboshare.vercel.app/"
            >
              View Demo <SvgLink />
            </a>
          </div>
        </div>

        {/* box for mr aghrabeh */}
        <div
          className="project__box"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className="project__image">
            <img src={mrAghrabeh} alt="mr Aghrabeh" />
          </div>

          <div className="project__desc">
            <p>
              Mr Aghrabeh is a shopify platform for sells watch. in this project
              i focused on UI, Animations and Clean Code to show my skills in
              this field.
            </p>
          </div>

          <div className="project__technolegies">
            <span>
              <SvgReact />
            </span>
          </div>

          <div className="project__cta">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://mr-aghrabeh.vercel.app/"
            >
              View Demo <SvgLink />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProject;
