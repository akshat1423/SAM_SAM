import Images from "./Slider/Images";
import Navbarr from "./Navbar/Navbarr";
import FakeHeader from "./FakeHeader/FakeHeader";
import About from "./About/About";
import Carousel from "./Homee/Carousel";
import Cities from "./Cities/Cities";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import CoverflowCarousel from "./ImageSlider/CoverflowCarousel";
import Line from "./Line/Line";
import Ctm from "./CTM/ctm";

import { useRef } from "react";

export default function Home(params) {

  const cityRefs = {
    mumbai: useRef(null),
    pune: useRef(null),
    delhi: useRef(null),
    jaipur: useRef(null),
    indore:useRef(null),
  };

  return (
    <>
      <FakeHeader></FakeHeader>
      <Navbarr></Navbarr>
      <Carousel></Carousel>
      <Line></Line>


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

      
      <Ctm></Ctm>
      <Footer cityRefs={cityRefs}></Footer>
    </>
  );
}
