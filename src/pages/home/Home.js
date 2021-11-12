import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FsLightbox from "fslightbox-react";
import Loader from "./../../components/Loader/Loader";
import dataMinimal from "../../data/Slider/minimal-design-data.json";
import HeaderOne from "../../components/Header/HeaderHome";
import WhoWeAreOne from "../../components/WhoWeAre/WhoWeAreOne";
import HeroSliderCombined from "../../components/Hero/HeroHome";
import WelcomeTwo from "../../components/WelcomeSection/WelcomeHome";
import CountersThree from "../../components/Counters/CountersThree";
import Portfolio from "../../components/Portfolio/PortfolioHome";
import TabsIconSectionTwo from "../../components/Tabs/TabsIconSectionTwo";
import CTATwo from "../../components/CTA/CTATwo";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import FooterOne from "../../components/Footer/FooterOne";

const MinimalDesign = () => {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <HeaderOne />
      <HeroSliderCombined data={dataMinimal} font="cardo-font" />
      <WelcomeTwo toggler={toggler} handleToggler={handleToggler} />
      <CountersThree type="wide" />
      <TestimonialsOne
        title="Testimonials"
        tagline="What its like working with me"
        font="cardo-font"
      />
      <Portfolio columns="3" layout="wide" items="6" classAppend="pt-0" />
      {/* <TabsIconSectionTwo title="What We Offer" font="cardo-font" /> */}
      <CTATwo
        title="Let's get Connected"
        tagline="Network is Networth"
        textButton="Let's talk"
        linkButton="!#"
      >
        Email me even if it is just to share ideas about a utopian society straight out of Asimov!
      </CTATwo>
      <FooterOne />
    </Loader>
  );
};

export default MinimalDesign;
