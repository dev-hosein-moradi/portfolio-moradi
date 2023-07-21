import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";

const ProjectsCard = ({ project, index }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 1)}>
      <Tilt className="card__box" options={{ max: 45, scale: 1, speed: 450 }}>
        <img
          className="card__image"
          alt={project?.name}
          src={project?.imageUrl}
        />
        <motion.div>
          <h3 className="card__name">{project?.name}</h3>
          <p className="card__title">{project?.title}</p>
        </motion.div>

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
      </Tilt>
    </motion.div>
  );
};

export default ProjectsCard;
