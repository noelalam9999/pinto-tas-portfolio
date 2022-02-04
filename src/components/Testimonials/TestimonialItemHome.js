import React from "react";

const TestimonialItem = ({ avatar, name,link, role, children }) => (
  <div className="testimonial-item">
    <div className="testimonial-content">
      {/* <img
        className="img-fluid rounded-circle"
        src={require("../../assets/images/" + avatar)}
        alt="avatar-1"
      /> */}
      {/* <h5>{name}</h5>
      <p>{role}</p> */}
      <h4>{children}</h4>
      <a href={link} target="_blank">Learn More</a>
    </div>
  </div>
);

export default TestimonialItem;
