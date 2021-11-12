import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderHome";
import PageTitlePortfolio from "../../components/PageTitle/PageTitlePortfolio";
import Portfolio from "../../components/Portfolio/Portfolio";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import FooterOne from "../../components/Footer/FooterOne";

const PortfolioBoxedSpaceTwo = () => (
  <Loader>
    <HeaderOne />
    <PageTitlePortfolio
      title="My Portfolio"
      tagline="Projects and Initiatives over the Years"
    />
    <section className="pt-100 pt-100">
      <Portfolio filter="true" columns="2" layout="box" space="true"/>
    </section>
    <ClientsBrand />
    <FooterOne />
  </Loader>
);

export default PortfolioBoxedSpaceTwo;
