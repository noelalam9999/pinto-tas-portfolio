import React from "react";
import Icofont from "react-icofont";

const FeatureBoxOne = ({ icon, title, children,year , index }) => (
  <div
    className="col-md-12 feature-box text-left mb-50 col-sm-6"
    data-aos={"fade-up"}
    data-aos-delay={`${index}00`}
    data-aos-duration={1000}
  >
    <div className="float-left">
    <img style={{borderRadius:"10px", paddingBottom:"5px"}} src={icon} alt="Girl in a jacket" width="60" height="60"/> 
    </div>
    <div className="float-right">
      <h3 className="mt-0 cardo-font">{title}</h3>
      <p>{year}</p>
      <p>{children}</p>
      
    </div>
  </div>
);

export default FeatureBoxOne;
