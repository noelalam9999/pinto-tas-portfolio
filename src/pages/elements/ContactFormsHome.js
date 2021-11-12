import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import ContactArchitecture from "../../components/ContactUs/ContactArchitecture";
import ContactThree from "../../components/ContactUs/ContactThree";
import ContactTwo from "../../components/ContactUs/ContactTwo";
import FooterOne from "../../components/Footer/FooterOne";

const ContactForms = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Contact Forms" />
   
    <ContactThree />
   
    <FooterOne />
  </Loader>
);

export default ContactForms;
