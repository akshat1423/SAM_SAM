import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register/Register';
import ThankYou from './components/ThankYou';

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;