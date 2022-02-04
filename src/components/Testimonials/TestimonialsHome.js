import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import TestimonialItem from "./TestimonialItemHome";
import testimonialsData from "../../data/Testimonials/testimonials-data.json";

const TestimonialsOne = ({ title, tagline, font }) => {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slick testimonial",
  };
  return (
    <section
      className="parallax-bg-18 fixed-bg"
      data-stellar-background-ratio="0.2"
    >
      <div className="overlay-bg"></div>
      <div className="container">
        <div className="row">
          <HeadingSection
            title={title}
            tagline={tagline}
            classAppend="white-color"
            font={font}
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {testimonialsData.map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  role={testimonial.role}
                  link={testimonial.link}
                >
                  {testimonial.text}
                </TestimonialItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOne;
