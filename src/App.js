import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";



// Pages
import Home from "./Pages/Home";
import VolcanoList from "./Pages/VolcanoList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import VolcanoDetail from "./Pages/VolcanoDetail";


function App() {
 

  return (
    <BrowserRouter>
      <div className="App">
        <Header  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/VolcanoList" element={<VolcanoList />} />
          <Route path="/volcano/:id" element={<VolcanoDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
