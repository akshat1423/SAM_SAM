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

import "./Home.css";

import { useRef, useEffect } from "react";

export default function Home(params) {

  const cityRefs = {
    mumbai: useRef(null),
    pune: useRef(null),
    delhi: useRef(null),
    jaipur: useRef(null),
    indore:useRef(null),
  };

  const Blocks = () => {
    useEffect(() => {
      const blockContainer = document.getElementById("blocks");
      const blockSize = 50;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numCols = Math.ceil(screenWidth / blockSize);
      const numRows = Math.ceil(screenHeight / blockSize);
      const numBlocks = numCols * numRows;
  
      function createBlocks() {
        for (let i = 0; i < numBlocks; i++) {
          const block = document.createElement("div");
          block.classList.add("block");
          block.dataset.index = i;
          block.addEventListener("mousemove", highlightRandomNeighbors);
          blockContainer.appendChild(block);
        }
      }
  
      function highlightRandomNeighbors() {
        const index = parseInt(this.dataset.index);
        const neighbors = [
          index - 1,
          index + 1,
          index - numCols,
          index + numCols,
        ].filter(
          (i) =>
            i >= 0 &&
            i < numBlocks &&
            Math.abs((i % numCols) - (index % numCols)) <= 1
        );
  
        this.classList.add("highlight");
        setTimeout(() => {
          this.classList.remove("highlight");
        }, 500);
        shuffleArray(neighbors)
          .slice(0, 1)
          .forEach((nIndex) => {
            const neighbor = blockContainer.children[nIndex];
            if (neighbor) {
              neighbor.classList.add("highlight");
              setTimeout(() => {
                neighbor.classList.remove("highlight");
              }, 500);
            }
          });
      }
  
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
  
      createBlocks();
    }, []);
  
    return <div id="blocks"></div>;
  };

  return (
    <>
      <div className="blocks-container">
        <Blocks />
      </div>

      <div className="all-content">
        <FakeHeader></FakeHeader>
        <Navbarr></Navbarr>
        <Carousel></Carousel>
        <Line></Line>

        <div
          id="about"
          style={{ width: "100vw", height: "10vh", backgroundColor: "transparent" }}
        ></div>

        <About></About>

        <div
          id="cities"
          style={{ width: "100vw", height: "10vh", backgroundColor: "transparent" }}
        ></div>

        <Cities cityRefs={cityRefs}></Cities>
        <Images></Images>

        <div
          id="testimonials"
          style={{ width: "100vw", height: "10vh", backgroundColor: "transparent" }}
        ></div>

        <Testimonials></Testimonials>
        <Ctm></Ctm>
        <Footer cityRefs={cityRefs}></Footer>
      </div>
    </>
  );
}