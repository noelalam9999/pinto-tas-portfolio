import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderHome";
import PageTitleService from "../../components/PageTitle/PageTitleServiceConsultancy";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import dataSmall from "../../data/Slider/small-business-data.json";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwoConsultancy";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import image from "../../assets/images/about-video-img.jpg";
import CounterTwo from "../../components/Counters/CounterTwo";
import OurTeamTwo from "../../components/Team/OurTeamTwo";
import PriceTables from "../../components/PriceTables/PriceTables";
import TestimonialsOne from "../../components/Testimonials/TestimonialsHome";
import ClientBrands from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";

const SmallBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [toggler, setToggler] = useState(false);

  return (
    <Loader>
      <HeaderOne/>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
 <PageTitleService tagline="Solving For You With You" />
   

      <WhoWeAreTwo title="Why give me your time" tagline="The world at your fingertips">
      A Chappius Haldar & Co Consultant with 5 years of international experience, 
      I have served as the Senior Analyst and Sales and Account Management Consultant of two Financial Instituition and Venture Capital. 
      I am a finance, strategy, and operations expert with deep experience in telecom, financial services, 
      data centers, and manufacturing. I enjoy freelancing because
       it allows me to work on a wide variety of issues for companies of all sizes and many industries.
      </WhoWeAreTwo>
      <AboutUsOne
        title="When to Hire Me"
        textButton="Read more"
        linkButton="!#"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      >
        <p className="mt-20">
        If you're preparing to hit the street to find investors, you need to be ready, period. If your investor-facing materials aren't "spot on", there's almost never a 2nd chance.  Ask the 99% that came before you, tried, and never got to due diligence stage, let alone a funding event.  Ask the 1% that secured Seed or A Series rounds then couldn't execute.  The ability to go back out and secure a next round of funding is all but lost and the doors are closed.  
        </p>
        <p>
Investors want to see a clear path to an exit with a high value ROI.  If you can't demonstrate the end game, they have one of two choices; step in with the round and manage you in ways you never imagined (which may be what you need) to ensure success or just tell you nicely you're too early or there's not a fit in their investment portfolio.
        
       
        </p>
      </AboutUsOne>
      <CounterTwo />

      <Portfolio columns="3" layout="wide" items="6" classAppend="pt-0" />
      
      <TestimonialsOne title="My Values" tagline="Dive Deeper into my Brain" />
      <ClientBrands />
      <FooterOne />
    </Loader>
  );
};

export default SmallBusiness;
