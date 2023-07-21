import React from "react";
import "./myCertificate.css";
import SvgLink from "../../../assets/SVGs/SvgLink";
import SvgAward from "../../../assets/SVGs/SvgAward";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { myCertificate } from "../../../constants";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";

const CertificateCard = ({ cert }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "none",
        height: "140px",
        width: "300px",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      icon={
        <div className="box__icon">
          <SvgAward />
        </div>
      }
    >
      <div className="certificate__box">
        <div className="certificate__desc">
          <p>{cert?.name}</p>
        </div>
        <div className="certificate__cta">
          <a target={"_blank"} rel="noreferrer" href={cert?.certUrl}>
            {cert?.company} <SvgLink />
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const MyCertificate = () => {
  return (
    <section className="about__certificate">
      <motion.div variants={textVariant()}>
        <h3>Certificate</h3>
      </motion.div>

      <div className="certificate__wrapper">
        <VerticalTimeline>
          {myCertificate.map((cert, index) => (
            <CertificateCard key={`cert-${index}`} cert={cert} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(MyCertificate, "myCertificate");
