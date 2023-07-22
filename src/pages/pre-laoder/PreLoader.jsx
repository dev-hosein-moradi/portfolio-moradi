import React from "react";

const PreLoader = () => {
  return (
    <div className={`preloader__wrapper`}>
      <div className="first__name">
        <span className="fi__H">H</span>
        <span className="fi__O">O</span>
        <span className="fi__S">S</span>
        <span className="fi__E">E</span>
        <span className="fi__I">I</span>
        <span className="fi__N">N</span>
      </div>

      <div className="last__name">
        <span className="la__M">M</span>
        <span className="la__O">O</span>
        <span className="la__R">R</span>
        <span className="la__A">A</span>
        <span className="la__D">D</span>
        <span className="la__I">I</span>
      </div>
    </div>
  );
};

export default PreLoader;
