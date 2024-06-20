import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
