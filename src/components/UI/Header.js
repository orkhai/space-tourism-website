import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobilemenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <Link to="/">
        <button className={classes.logo}></button>
      </Link>
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

      <div className={classes.line}></div>

      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/" exact>
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/destination">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/crew">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/technology">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
