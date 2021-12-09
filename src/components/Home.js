import React from "react";
import classes from "./Home.module.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
    </div>
  );
};

export default Home;
