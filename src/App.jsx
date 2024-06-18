import Images from "./components/Slider/Images";
import Navbarr from "./components/Navbar/Navbarr";
import FakeHeader from "./components/FakeHeader/FakeHeader";
import About from "./components/About/About";
import Carousel from "./components/Homee/Carousel";


function App() {
  return (
    <div className="App">
      <FakeHeader></FakeHeader>
      <Navbarr></Navbarr>
      <Carousel></Carousel>

      <hr />
      <div id="about" style={{width:'100vw', height:'10vh',backgroundColor: '#2d2c31'}}></div>
      <About></About>
      <hr />
      <Images></Images>
    </div>
  );
}

export default App;
