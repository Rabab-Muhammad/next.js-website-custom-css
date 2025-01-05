import React from "react";
import cssStyle from "./Hero.module.css"

const Hero = () => {
  return (
    <div>
      <section
        className={cssStyle.hero}
        style={{ backgroundImage: "url(watch-bg2-0.jpg)" }}
      >
        <div>
          <h1 className="fade-in">Welcome to Timeluxe</h1>
          <p>Where time meets timeless style</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
