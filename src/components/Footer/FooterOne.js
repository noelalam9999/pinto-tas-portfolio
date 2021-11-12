import React from "react";
import logoFooter from "../../assets/images/logo-white2.png";
import FooterCopyright from "./FooterCopyright";

const FooterOne = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/`}>
                    <img
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                 Always up for new and exciting ways to make the world a better place to live in. 
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Lets Colab</h5>
                <ul>
                  <li>
                    <a href="#!">Consultancy</a>
                  </li>
                  <li>
                    <a href="#!">Business Analysis</a>
                  </li>
                  <li>
                    <a href="#!">Education</a>
                  </li>
                  <li>
                    <a href="#!">Non-Profit</a>
                  </li>
               
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">More</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>About Me</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Drop a Message</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Services</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Educational &amp; Content</a>
                  </li>
                  {/* <li>
                    <a href={process.env.PUBLIC_URL}>Careers</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Lets Meet</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href={process.env.PUBLIC_URL}>
                      Park Lane Llandrindod Wells, LD7 9QW
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+44 1632 960290</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:helloscoda@gmail.com">
                      helloscoda@gmail.com
                    </a>
                  </li>
                  {/* <li>
                    <i className="icofont icofont-globe"></i>
                    <a href={process.env.PUBLIC_URL}>www.envato.com</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default FooterOne;
