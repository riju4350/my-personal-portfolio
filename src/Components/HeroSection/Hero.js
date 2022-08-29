import React from "react";
import "./Hero.css";
import Me from "../../images/me.png";
import mouse from "../../images/mouse.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="hero-wrapper">
          <div className="hero-heading">Hello! This is</div>
          <div className="hero-name">Abu Jafar</div>
          <div className="title-container">
            <div className="title-text">I'm a </div>
            <div className="hero-title">
              <div className="title-wrapper">
                <div className="title-item">Web Developer</div>
                <div className="title-item">UI/UX Designer</div>
                <div className="title-item">Photographer</div>
                <div className="title-item">Content Writer</div>
              </div>
            </div>
          </div>
          <div className="hero-description">
            I'm a Junior Web-developer with no experience of working in real
            world projects. I design websites for my clients.
          </div>
        </div>
      </div>

      <div className="right">
        <img src={Me} alt="" />
        <div className="mouseIcon">
          <img
            src={mouse}
            alt=""
            style={{ position: "absolute", bottom: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
