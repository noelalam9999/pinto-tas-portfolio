import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderHome";
import PageTitleService from "../../components/PageTitle/PageTitleServiceConsultancy";
import WhoWeAreNine from "../../components/WhoWeAre/WhoWeAreNine";
import PriceTables from "../../components/PriceTables/PriceTables";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const ServiceCreative = (props) => (
  <Loader>
    <HeaderOne />
    <PageTitleService title={props.match.params.service} tagline="Solving For you with you" />
    <WhoWeAreNine />
    <PriceTables />
    <TestimonialsOne title="Testimonials" tagline="Happy clients" />
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default ServiceCreative;
