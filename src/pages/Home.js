import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import Header from "../components/UI/Header";

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <main className={classes.home_main}>
        <div className={classes.space}>
          <h1>So, you want to travel to</h1>
          <h2>Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="/destination">
          <button className={classes.explore}>Explore</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
