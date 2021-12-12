import React from "react";
import classes from "./Destination.module.css";
import Header from "./UI/Header";

const Destination = () => {
  return (
    <div className={classes.destination}>
      <Header />
      <main>
        <div className={classes.pick_destination}>
          <h1>
            <span>01</span> Pick Your Destination
          </h1>
          <div className={classes.destination_image}></div>
        </div>

        <div className={classes.destination_details}>
          <nav className={classes.destination_choice}>
            <ul>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
              <li>Titan</li>
            </ul>
          </nav>
          <h2>Moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className={classes.line}></div>
          <div className={classes.distance_time}>
            <div className={classes.distance}>
              <h3>Avg. Distance</h3>
              <h4>384,400 Km</h4>
            </div>
            <div className={classes.time}>
              <h3>Est. Travel Time</h3>
              <h4>3 Days</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
