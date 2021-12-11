import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
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
