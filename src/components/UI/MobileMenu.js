import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <ul>
        <li>
          <Link to="/">
            <span>00</span> Home
          </Link>
        </li>
        <li>
          <Link to="/destination">
            <span>01</span> Destination
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <span>02</span> Crew
          </Link>
        </li>
        <li>
          <Link to="/technology">
            <span>03</span> Technology
          </Link>
        </li>
      </ul>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Menu />, document.getElementById("overlay-root"))}
    </Fragment>
  );
};

export default MobileMenu;
