import Images from "./components/Slider/Images";
import Navbarr from "./components/Navbar/Navbarr";
import FakeHeader from "./components/FakeHeader/FakeHeader";
import About from "./components/About/About";
import Carousel from "./components/Homee/Carousel";

import Cities from "./components/Cities/Cities";
import Testimonials from "./components/Testimonials/Testimonials";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
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

      <Cities></Cities>
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
      <Images></Images>

      <Footer></Footer>
    </div>
  );
}

export default App;
