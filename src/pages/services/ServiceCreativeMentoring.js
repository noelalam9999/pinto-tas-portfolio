import React,  { useState, useEffect } from "react";
import AOS from "aos";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderHome";
import PageTitleService from "../../components/PageTitle/PageTitleService";
import WhoWeAreOne from "../../components/WhoWeAre/WhoWeAreMentoring";
import PriceTables from "../../components/PriceTables/PriceTables";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";
import AboutUsOne from "../../components/AboutUs/AboutUsOne";
import image from "../../assets/images/about-video-img.jpg";
import image2 from "../../assets/images/about-video-img.jpg";
import AboutUsTwo from "../../components/AboutUs/AboutUsTwo";
import CTAOne from "../../components/CTA/CTAOne";

const ServiceCreative = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [toggler, setToggler] = useState(false);
  return(
  <Loader>
    <HeaderOne />

    <PageTitleService title="Mentoring"  />
    <WhoWeAreOne
        title="Why we need Mentors"
        tagline="in this increasingly confusing world"
        verticalWord="Case Comps"
        horizontalWord="Career"
      >
        At the beginning of your career, it’s certainly a great idea to find a mentor to help you navigate through these formative years. In addition, the stress of changing careers later on, or the complacency that some people feel after being in the same role for several years, can also be a great time to engage a career mentor.
      </WhoWeAreOne>
      <AboutUsOne
        title="Cant Decide on a Career PAth?"
        textButton="Read more"
        linkButton="!#"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      >
        <p className="mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
          Donec in risus eget purus mattis varius. Nulla dapibus quis orci et
          tincidunt. Phasellus in rhoncus quam. Fusce a est lacinia, ultricies
          mi nec, rutrum dolor.
        </p>
        <p>
          Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor a
          auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
          facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris non
          tristique.
        </p>
      </AboutUsOne>
      <AboutUsTwo
        title="A chat with me will"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      />
       <AboutUsOne
        title="Case Competition ahead?"
        textButton="Read more"
        linkButton="!#"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      >
        <p className="mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
          Donec in risus eget purus mattis varius. Nulla dapibus quis orci et
          tincidunt. Phasellus in rhoncus quam. Fusce a est lacinia, ultricies
          mi nec, rutrum dolor.
        </p>
        <p>
          Donec vehicula cursus metus viverra aliquet Aliquam tincidunt dolor a
          auctor finibus. Sed in sodales magna. Etiam eget velit nec urna
          facilisis fringilla sed eget purus. Ut pulvinar ullamcorper mauris non
          tristique.
        </p>
      </AboutUsOne>
      <AboutUsTwo
        title="Lets solve it together"
        image={image}
        toggler={toggler}
        setToggler={setToggler}
      />
    
    <TestimonialsOne title="Testimonials" tagline="Happy clients" />
    
    <ClientsBrand />
    <CTAOne
        tagline="Mentoring"
        title="Let's write your story, together."
        textButton="Contact us"
        textLink="!#"
        linkButton="/get-in-touch"
        bg="dark"
      >Drop me a message! Even if its just to talk about the impending doom of capitalism
      </CTAOne>
    <FooterOne />
  </Loader>

);
  };

export default ServiceCreative;
