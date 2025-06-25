import React from "react";
import OurServices from "../../components/website/OurServices";
import UnlockEfficiency from "../../components/common/UnlockEfficiency";
import Testimonials from "../../components/common/Testimonials";
import Banner from "../../components/website/Banner";
import EnhancedWhyChooseUs from "../../components/website/EnhancedWhyChooseUs";

const Services = () => {
  return (
    <>
      <Banner page="Services" />
      <OurServices />
      <EnhancedWhyChooseUs />
      <UnlockEfficiency />
      <Testimonials />
    </>
  );
};

export default Services;
