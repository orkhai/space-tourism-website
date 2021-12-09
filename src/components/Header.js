import React, { useState } from "react";
import classes from "./Header.module.css";

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

      <nav>
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Crew</li>
          <li>Technology</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
