import React from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { themeActions } from "../../redux/slices/themeSlice";
import { motion } from "framer-motion";

const Navbar = ({ scrollToTitle }) => {
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(themeActions.changer());
  };

  return (
    <div className="navbar">
      {/* for define items */}
      <div className="navbar__links">
        <ul className="links__items">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* about me, projects, contact me */}
            <li onClick={() => scrollToTitle("project")}>01 - Projects</li>
            <li onClick={() => scrollToTitle("about")}>02 - About-Me</li>
            <li onClick={() => scrollToTitle("contact")}>03 - Contact-Me</li>
          </motion.div>
        </ul>
      </div>

      {/* for define theme and language switcher */}
      <div className="navbar__tools">
        {/* theme switcher */}
        <div className="tools__theme">
          <label className="switch">
            <input type="checkbox" onChange={onChangeTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
