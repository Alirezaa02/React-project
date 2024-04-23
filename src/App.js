import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// pages
import Home from "./Pages/Home";
import VolcanoList from "./Pages/VolcanoList";



function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header />

       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/VolcanoList" element={<VolcanoList />} />
       </Routes>


       <Footer />
     </div>
   </BrowserRouter>

  );
}

export default App;
