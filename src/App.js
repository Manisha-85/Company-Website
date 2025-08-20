
import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero'
// import SecuritySolutions from './Components/SecuritySolution';
// import MarketInsights from './Components/MarketInsights';
// import HeroSection from './Components/Section';
// import ClientsSection from './Components/ClientsSection';
// import Footer from "./Components/Footer" 
//  import Pages from "./Components/pages/Product/Product";
import Homepage from "./Components/Pages/Homepage/HomePage";

import Product from "./Components/Pages/Product/Product";
import Services from "./Components/Pages/Services/Services";
import Developer from "./Components/Pages/Resources/Developer";
import Community from "./Components/Pages/Resources/Community";
import AboutUs from "./Components/Pages/AboutUs/About";

import GetInTouch from './Components/Pages/GetInTouch/GetInTouch.jsx';
import PrivacyPolicy from "./Components/Pages/Resources/PrivacyPolicy";
import TermsAndConditions from "./Components/Pages/Resources/TermsAndConditions";

// Industry
import ITIndustry from "./Components/Pages/Industry/ITIndustry";
import Healthcare from "./Components/Pages/Industry/Healthcare";
import Manufacturing from './Components/Pages/Industry/Manufacturing';
import ECommerce from "./Components/Pages/Industry/Ecommerce";
import RealEstate from "./Components/Pages/Industry/RealEstate";
   function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/services" element={<Services />} />

      {/* resources */}
      <Route path="/developer" element={<Developer />} />
      <Route path="/resources/community" element={<Community />} />
      <Route path="/resources/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/resources/termsandconditions" element={<TermsAndConditions />} />

      {/* aboutus */}
      <Route path="/aboutus" element={<AboutUs />} />
     
      <Route path="/getintouch" element={<GetInTouch />} />
      {/* industry */}
      <Route path="/itindustry" element={<ITIndustry />} />
      <Route path="/industry/healthcare" element={<Healthcare />} />
      <Route path="/industry/manufacturing" element={<Manufacturing/>} />
      <Route path="/industry/ecommerce" element={<ECommerce/>} />
      <Route path="/industry/realestate" element={<RealEstate/>} />

      </Routes>

    </Router>
   
  );
}


export default App;