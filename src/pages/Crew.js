import React, { useState } from "react";
import classes from "./Crew.module.css";
import Header from "../components/UI/Header";
import data from "../data.json";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const [crewImg, setCrewImg] = useState(classes.crew_image_commander);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const selectCommander = () => {
    setIndex(0);
    setCrewImg(classes.crew_image_commander);
  };

  const selectSpecialist = () => {
    setIndex(1);
    setCrewImg(classes.crew_image_specialist);
  };

  const selectPilot = () => {
    setIndex(2);
    setCrewImg(classes.crew_image_pilot);
  };

  const selectEngineer = () => {
    setIndex(3);
    setCrewImg(classes.crew_image_engineer);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart - touchEnd > 150) {
      setIndex(index + 1);
      if (index >= 3) {
        setIndex(3);
      }
      if (crewImg === classes.crew_image_commander) {
        setCrewImg(classes.crew_image_specialist);
      }
      if (crewImg === classes.crew_image_specialist) {
        setCrewImg(classes.crew_image_pilot);
      }
      if (crewImg === classes.crew_image_pilot) {
        setCrewImg(classes.crew_image_engineer);
      }
    }
    if (touchStart - touchEnd < -150) {
      setIndex(index - 1);
      if (index <= 0) {
        setIndex(0);
      }
      if (crewImg === classes.crew_image_engineer) {
        setCrewImg(classes.crew_image_pilot);
      }
      if (crewImg === classes.crew_image_pilot) {
        setCrewImg(classes.crew_image_specialist);
      }
      if (crewImg === classes.crew_image_specialist) {
        setCrewImg(classes.crew_image_commander);
      }
    }
  };

  const crew = data.crew;

  return (
    <div className={classes.crew}>
      <Header />
      <main
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={classes.crew_main}
      >
        <h1>
          <span>02</span> Meet your crew
        </h1>

        <section>
          <div>
            <div className={`${crewImg}`}></div>
          </div>

          <div className={classes.info_indicator}>
            <div className={classes.crew_indicator}>
              <div
                className={
                  index === 0
                    ? classes.crew_indicator_active
                    : classes.indicator
                }
                onClick={selectCommander}
              ></div>
              <div
                className={
                  index === 1
                    ? classes.crew_indicator_active
                    : classes.indicator
                }
                onClick={selectSpecialist}
              ></div>
              <div
                className={
                  index === 2
                    ? classes.crew_indicator_active
                    : classes.indicator
                }
                onClick={selectPilot}
              ></div>
              <div
                className={
                  index === 3
                    ? classes.crew_indicator_active
                    : classes.indicator
                }
                onClick={selectEngineer}
              ></div>
            </div>

            <div className={classes.crew_info}>
              <h2>{crew[index].role}</h2>
              <h3>{crew[index].name}</h3>
              <p>{crew[index].bio}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Crew;
