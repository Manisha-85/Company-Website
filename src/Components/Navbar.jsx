import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const [dropdownResourcesOpen, setDropdownResourcesOpen] = useState(false);
  const [dropdownIndustryOpen, setDropdownIndustryOpen] = useState(false);

  const navigate=useNavigate();

  return (
    <nav className="navbar">
      <div className="logo"> <img src="Logo.png" alt="" />Vigomerge</div>

      <ul className="nav-links">
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li onMouseEnter={() => setDropdownResourcesOpen(true)}onMouseLeave={() => setDropdownResourcesOpen(false)}>
         <Link to="/resources" > Resources</Link>
          {dropdownResourcesOpen && (
            <ul className="dropdown">
              <li onClick={() => navigate('/developer')}><Link to="/resources/developer">Developer</Link></li>
              <li><Link to="/resources/community">Community</Link></li>
              <li><Link to="/resources/privacypolicy">Privacy Policy</Link></li>
              <li><Link to="/resources/termsandconditions">TermsandConditions</Link></li>
              
            </ul>
          )}
        </li>

       <li onMouseEnter={() => setDropdownIndustryOpen(true)}
          onMouseLeave={() => setDropdownIndustryOpen(false)} onClick={() => navigate('/industry')}>
          <Link to="/industry"> Industry</Link>
          {dropdownIndustryOpen && (
            <ul className="dropdown">
              <li><Link to="/industry/itindustry">IT Industry</Link></li>
              <li><Link to="/industry/healthcare">Healthcare IT Services</Link></li>
              <li><Link to="/industry/manufacturing">Manufacturing</Link></li>
              <li><Link to="/industry/ecommerce">E-Commerce</Link></li>
              <li><Link to="/industry/realestate">Real Estate</Link></li>
              
            </ul>
          )}
        </li>
        <li onClick={() => navigate('/aboutus')}><Link to="/aboutus">About Us</Link></li>
      </ul>

      <button className="nav-button" onClick={() => navigate('/getintouch')}>Get in Touch</button>

    </nav>
  );
};

export default Navbar;