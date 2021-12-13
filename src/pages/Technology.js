import React from "react";
import classes from "./Technology.module.css";
import Header from "../components/UI/Header";

const Technology = () => {
  return (
    <div className={classes.technology}>
      <Header />
      <main className={classes.technology_main}></main>
    </div>
  );
};

export default Technology;
