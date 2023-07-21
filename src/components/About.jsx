import React, { Fragment } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { en } from "../constants/texts";
import Tech from "./Tech";

const About = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{en[0].about[0].title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {en[0].about[0].aboutMeText}
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        <Tech />
      </div>
    </Fragment>
  );
};

export default SectionWrapper(About, "about");
