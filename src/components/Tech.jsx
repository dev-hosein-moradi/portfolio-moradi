import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {technologies.map((technology) => (
        <div
          className="black-gradient w-12 h-12 rounded-full flex justify-center items-center p-1"
          key={technology?.name}
        >
          <img
            className="w-10/12 h-10/12 object-contain"
            src={technology?.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
