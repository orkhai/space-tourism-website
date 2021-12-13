import React, { useState } from "react";
import classes from "./Destination.module.css";
import Header from "../components/UI/Header";
import data from "../data.json";

const Destination = () => {
  const [index, setIndex] = useState(0);
  const [bgImg, setBgImg] = useState(classes.destination_image_moon);

  const destinations = data.destinations;

  const moonSelector = () => {
    setIndex(0);
    setBgImg(classes.destination_image_moon);
  };

  const marsSelector = () => {
    setIndex(1);
    setBgImg(classes.destination_image_mars);
  };

  const europaSelector = () => {
    setIndex(2);
    setBgImg(classes.destination_image_europa);
  };

  const titanSelector = () => {
    setIndex(3);
    setBgImg(classes.destination_image_titan);
  };

  return (
    <div className={classes.destination}>
      <Header />
      <main className={classes.destination_main}>
        <div className={classes.pick_destination}>
          <h1>
            <span>01</span> Pick Your Destination
          </h1>
          <div className={`${bgImg}`}></div>
        </div>

        <div className={classes.destination_details}>
          <nav className={classes.destination_choice}>
            <ul>
              <li
                className={index === 0 && classes.destination_choice_active}
                onClick={moonSelector}
              >
                Moon
              </li>
              <li
                className={index === 1 && classes.destination_choice_active}
                onClick={marsSelector}
              >
                Mars
              </li>
              <li
                className={index === 2 && classes.destination_choice_active}
                onClick={europaSelector}
              >
                Europa
              </li>
              <li
                className={index === 3 && classes.destination_choice_active}
                onClick={titanSelector}
              >
                Titan
              </li>
            </ul>
          </nav>

          <h2>{destinations[index].name}</h2>
          <p>{destinations[index].description}</p>

          <div className={classes.line}></div>

          <div className={classes.distance_time}>
            <div className={classes.distance}>
              <h3>Avg. Distance</h3>
              <h4>{destinations[index].distance}</h4>
            </div>

            <div className={classes.time}>
              <h3>Est. Travel Time</h3>
              <h4>{destinations[index].travel}</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
