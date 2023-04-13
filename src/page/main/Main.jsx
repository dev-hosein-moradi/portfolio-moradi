import React from "react";
import About from "./about/About";
import ContactMe from "./contact me/ContactMe";
import Home from "./home/Home";
import MyProject from "./myProject/MyProject";

const Main = () => {
  return (
    <div className="main">
      {/* Home section */}
      <Home />

      {/* About me section */}
      <About />

      {/* my project section */}
      <MyProject />

      {/* Contact me section */}
      <ContactMe />
    </div>
  );
};

export default Main;
