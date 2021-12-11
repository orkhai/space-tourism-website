import React, { useState } from "react";
import classes from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobilemenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <button className={classes.logo}></button>
      {!isMenuOpen ? (
        <button
          onClick={toggleMobilemenu}
          className={classes.mobile_menu}
        ></button>
      ) : (
        <button
          onClick={toggleMobilemenu}
          className={classes.mobile_menu_open}
        ></button>
      )}

      {isMenuOpen && <MobileMenu />}

      {/* <div className={classes.line}></div> */}
      <hr />

      <nav>
        <ul>
          <li>
            <span>00</span> Home
          </li>
          <li>
            <span>01</span> Destination
          </li>
          <li>
            <span>02</span> Crew
          </li>
          <li>
            <span>03</span> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
