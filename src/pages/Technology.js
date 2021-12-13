import React, { useState } from "react";
import classes from "./Technology.module.css";
import Header from "../components/UI/Header";
import data from "../data.json";

const Technology = () => {
  const [index, setIndex] = useState(0);
  const [techBg, setTechBg] = useState(classes.technology_image_vehicle);

  const tech = data.technology;

  const selectVehicle = () => {
    setIndex(0);
    setTechBg(classes.technology_image_vehicle);
  };

  const selectSpacePort = () => {
    setIndex(1);
    setTechBg(classes.technology_image_spaceport);
  };

  const selectSpaceCapsule = () => {
    setIndex(2);
    setTechBg(classes.technology_image_capsule);
  };

  return (
    <div className={classes.technology}>
      <Header />
      <main className={classes.technology_main}>
        <h1>
          <span>03</span> Space Launch 101
        </h1>

        <section>
          <div className={`${techBg}`}></div>

          <div className={classes.picker_info}>
            <div className={classes.technology_picker}>
              <div
                className={index === 0 ? classes.picker_active : classes.picker}
                onClick={selectVehicle}
              >
                1
              </div>
              <div
                className={index === 1 ? classes.picker_active : classes.picker}
                onClick={selectSpacePort}
              >
                2
              </div>
              <div
                className={index === 2 ? classes.picker_active : classes.picker}
                onClick={selectSpaceCapsule}
              >
                3
              </div>
            </div>

            <div className={classes.technology_info}>
              <h2>The Terminology...</h2>
              <h3>{tech[index].name}</h3>
              <p>{tech[index].description}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
