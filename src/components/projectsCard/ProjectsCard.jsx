import React from "react";
import { motion } from "framer-motion";

const ProjectsCard = ({ project }) => {
  return (
    <div className="card__box">
      <img
        className="card__image"
        alt={project?.name}
        src={project?.imageUrl}
      />

      <h3 className="card__name">{project?.name}</h3>
      <p className="card__title">{project?.title}</p>

      <div className="card__status">
        {/* icon for this option */}
        <p
          className={`${
            project?.statusCode === -1
              ? "failure"
              : project?.statusCode === 1
              ? "success"
              : "development"
          }`}
        >
          {project?.status}
        </p>
      </div>

      <motion.div
        whileTap={{ scale: 0.6 }}
        transition={{
          ease: "linear",
        }}
      >
        <button className="card__btn">SEE MORE</button>
      </motion.div>
    </div>
  );
};

export default ProjectsCard;
