import Images from "./Slider/Images";
import Navbarr from "./Navbar/Navbarr";
import FakeHeader from "./FakeHeader/FakeHeader";
import About from "./About/About";
import Carousel from "./Homee/Carousel";
import Cities from "./Cities/Cities";
import Testimonials from "./Testimonials/Testimonials";
import Sponsors from "./Sponsors/Sponsors";
import Footer from "./Footer/Footer";
import CoverflowCarousel from "./ImageSlider/CoverflowCarousel";

import { useRef } from "react";

export default function Home(params) {

  const cityRefs = {
    mumbai: useRef(null),
    pune: useRef(null),
    hyderabad: useRef(null),
    jaipur: useRef(null),
  };

  return (
    <>
      <FakeHeader></FakeHeader>
      <Navbarr></Navbarr>
      <Carousel></Carousel>

      <div
        id="about"
        style={{ width: "100vw", height: "10vh", backgroundColor: "#2d2c31" }}
      ></div>

      <About></About>

      <div
        id="cities"
        style={{ width: "100vw", height: "10vh", backgroundColor: "#2d2c31" }}
      ></div>

      <Cities cityRefs={cityRefs}></Cities>
      <Images></Images>


      <div
        id="testimonials"
        style={{ width: "100vw", height: "10vh", backgroundColor: "#2d2c31" }}
      ></div>

      <Testimonials></Testimonials>

      <div
        id="sponsors"
        style={{ width: "100vw", height: "10vh", backgroundColor: "#2d2c31" }}
      ></div>

      <Sponsors></Sponsors>
      {/* <CoverflowCarousel></CoverflowCarousel> */}
      <Footer cityRefs={cityRefs}></Footer>
    </>
  );
}
