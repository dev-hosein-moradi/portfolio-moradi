import React from "react";
import "./myProject.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import { SectionWrapper } from "../../../hoc";

import { myProjects } from "../../../data";
import ProjectsCard from "../../../components/projectsCard/ProjectsCard";

const MyProject = () => {
  return (
    <div className="myProject" id="Projects">
      <h1 className="projects__title">My Projects</h1>

      <section className="box__wrapper">
        {myProjects?.map((project, index) => {
          if (project?.lang === "en") {
            return (
              <ProjectsCard project={project} index={index} key={project?.id} />
            );
          }
        })}
      </section>
    </div>
  );
};

export default SectionWrapper(MyProject, "myProject");
