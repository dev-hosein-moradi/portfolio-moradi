import React from "react";
import "./courses.css";
import SvgLink from "../../../assets/SVGs/SvgLink";
import SvgGraduate from "../../../assets/SVGs/SvgGraduate";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import { courses } from "../../../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../../hoc/SectionWrapper";

const CourseCard = ({ course }) => {
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
          <SvgGraduate width={45} height={45} />
        </div>
      }
    >
      <div className="course__box">
        <div className="course__desc">
          <p>{course?.name}</p>
        </div>
        <div className="course__cta">
          <a target={"_blank"} rel="noreferrer" href={course?.courseUrl}>
            {course?.company} <SvgLink />
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Courses = () => {
  return (
    <section className="about__course">
      <motion.div variants={textVariant()}>
        <h3>Courses</h3>
      </motion.div>

      <div className="course__wrapper">
        <VerticalTimeline>
          {courses.map((course, index) => (
            <CourseCard key={`course-${index}`} course={course} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Courses, "Course");
