import React from "react";
import cssStyle from "./about.module.css"

const About = () => {
  return (
    <div>
      <section className={cssStyle.about} style={{backgroundImage:"url(watch-bg.jpg)"}}>
        <div className={cssStyle.content}>
          <h2 className="fade-in">About Us</h2>
          <p>
            At Timeluxe, we believe that a watch is not just a timepiece—{`it's`} a
            statement. With a passion for precision and design, we offer a
            collection of luxury watches that embody sophistication, elegance,
            and the art of timekeeping. Each watch in our collection is
            carefully crafted to meet the highest standards of quality, ensuring
            that you not only tell time but make every moment count. Whether
            {`you're`} looking for a classic design or a modern twist, Timeluxe is
            here to elevate your style and keep you on time—always.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
