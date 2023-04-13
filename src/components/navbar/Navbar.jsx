import React from "react";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { themeActions } from "../../redux/slices/themeSlice";

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
          {/* about me, projects, contact me */}
          <li onClick={() => scrollToTitle("about")}>01 - About-Me</li>
          <li onClick={() => scrollToTitle("project")}>02 - Projects</li>
          <li onClick={() => scrollToTitle("contact")}>03 - Contact-Me</li>
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
