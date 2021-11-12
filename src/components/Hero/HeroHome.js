import React, { forwardRef } from "react";
import TextLoop from "react-text-loop";
import bgImg from "../../assets/images/background/hero_banner.png";
import Canvas from "../../elements/Canvas";

const HeroSliderOne = forwardRef((props, ref) => {

    const tags = ["CONSULTANT", "BUSINESS ANALYST", "EDUCATOR"];

  return (
    <section className="pt-0 pb-0" id="home" ref={ref}>
      <div className="full-screen-bg">
        <div
          className="parallax-img"
          style={{ background: `url(${bgImg})` }}
        ></div>
        <Canvas />
        <div className="hero-text-wrap">
          <div className="hero-text white-color">
            <div className="container text-left">
              <h1 className="white-color font-700">Pipin Tasdyata</h1>
              <div style={{textAlign:"left!important"}} className="animate-caption">
                <h2 style={{textAlign:"left!important"}} className="white-color mt-30">
                  <TextLoop mask={true}>
                      {tags.map((tag, i) => (
                          <span style={{textAlign:"left!important"}} key={i}>{tag}</span>
                      ))}
                  </TextLoop>
                </h2>
              </div>
              <p className="text-left mt-30">
                <a href="!#" className="btn btn-outline-white btn-circle">View Resume</a>
                <a href="!#" className="btn btn-dark btn-circle">Hire Me</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSliderOne;
