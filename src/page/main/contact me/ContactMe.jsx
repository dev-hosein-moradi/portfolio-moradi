import React, { lazy, useEffect } from "react";
import "./contactMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { getNumOfVisitors } from "../../../redux/slices/visitCounterSlice";
import { useDispatch, useSelector } from "react-redux";

const SvgTelegram = lazy(() => import("../../../assets/SVGs/SvgTelegram"));
const SvgLinkedin = lazy(() => import("../../../assets/SVGs/SvgLinkedin"));
const SvgGithub = lazy(() => import("../../../assets/SVGs/SvgGithub"));
const SvgInsta = lazy(() => import("../../../assets/SVGs/SvgInsta"));

let initialRecieve = true;

const ContactMe = () => {
  const dispatch = useDispatch();
  const numberOfVisits = useSelector((state) => state.visitor.numOfVisitors);

  useEffect(() => {
    if (initialRecieve) {
      dispatch(getNumOfVisitors());
    }

    return () => {
      initialRecieve = false;
    };
  }, [dispatch]);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="contact" id="Contact-me">
      <h1
        className="contact__title"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Contact Me
      </h1>

      <section className="contact__card">
        <div className="card__social-media">
          <div
            className="media__line"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div
              className="media__spot"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="media__spot"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span></span>
              <span></span>
            </div>
            <div className="media__spot">
              <span></span>
              <span></span>
            </div>
            <div className="media__spot">
              <span></span>
              <span></span>
            </div>
          </div>

          <a
            href="https://github.com/dev-hosein-moradi"
            target={"_blank"}
            rel="noreferrer"
            className="icon__bg"
          >
            <SvgGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hosein-moradi-4a3251232/"
            target={"_blank"}
            rel="noreferrer"
            className="icon__bg"
          >
            <SvgLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_.ho3ein.mo/"
            target={"_blank"}
            rel="noreferrer"
            className="icon__bg"
          >
            <SvgInsta />
          </a>
          <a
            href="https://t.me/M_hosein7"
            target={"_blank"}
            rel="noreferrer"
            className="icon__bg"
          >
            <SvgTelegram />
          </a>
        </div>
        <div className="card__info">
          <h1
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            #OPEN_TO_WORK
          </h1>
          <div className="info__call">
            <div>
              <p
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                moradih7379@gmail.com
              </p>
            </div>

            <div>
              <p>+98 902 519 7379</p>
            </div>

            <div className="visitors">
              <p>Website Views</p>
              <p>
                {numberOfVisits
                  ? numberOfVisits
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : 50}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
