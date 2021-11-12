import React from "react";
import WelcomeSubsection from "./WelcomeSubsection";
import WelcomeFeatures from "./WelcomeFeaturesHome";
import HeadingThree from "../HeadingSection/HeadingThree";
import OurSkillsOne from "../OurSkills/OurSkillsHome";
import image from "../../assets/images/my_story.png";
import TeamSlider from "../Team/TeamSlider";

const WelcomeTwo = ({ toggler, handleToggler }) => (
  <section className="dark-bg pt-0 pb-0">
    <WelcomeSubsection
      title="My Story"
      tagline="How I became Pinto Tas"
      image={image}
      textButton="See Video"
      toggler={toggler}
      handleToggler={handleToggler}
    >
     Since childhood I was always frustrated by the fact that people make blatant Assumptions when it comes to making huge life decisions. People reluctance to ask around
     in fear of being judged and looked down upon has been the constant incumbents of mankind in general. This has been my driving force since day 1. 
     <br/><br/>The Business Administration Degree at HKU gave me the license to help people make more accurate data-driven decisions. Whether it be a supply chain problem in a multi-corp or
     education problem in a small rural city, I believe no problem is ever to big or unsolvable if we follow the right decision making steps.  

    </WelcomeSubsection>
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <HeadingThree
          title="My Focus"
          tagline="Fields you will see me tinkering with"
        >
          <OurSkillsOne classAppend="cardo-font" font="cardo-font" />
        </HeadingThree>
        <div className="col-md-4 col-sm-12 team-member-wrapper">
          <div className="col-inner">
            <TeamSlider />
          </div>
        </div>
        <WelcomeFeatures
          title="Experience"
          tagline="My Professional Journey"
        />
      </div>
    </div>
  </section>
);

export default WelcomeTwo;
