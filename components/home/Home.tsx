import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Trail from "./Trail";
import Testimonials from "./Testimonials";
import About from "./About";
import About2 from "./About2";
import Services from "./Services";
import Availability from "./Availability";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <About2 />
      <Availability />
      <Services />
      <About />
      <Testimonials />
      <Trail />
      <Footer />
    </div>
  );
};

export default Home;
