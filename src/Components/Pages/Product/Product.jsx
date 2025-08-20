import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
const Product = () => {
 
  return (
  <>
    <Navbar />
    <div className="product-section">
      <div className="product-content">
        <h1>
          AI-driven software, Top branding and digital<br />
          solutions for business
        </h1>
        <p>Beyond Excel & manual process for Digital Contact Us</p>
         
        <button  onClick={() => window.location.href = "/contact"} className="contact-button">Contact Us</button>
        
      </div>

      <div className="mobileapp-section py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
  <img
    src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169839.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
    alt="Mobile App Development"
    className="img-fluid rounded shadow"
  />
</div>
          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/1055/1055668.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
                alt="Mobile Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">Mobile Application Development.</h2>
            </div>
            <p className="lead text-dark">
              We take pride in saying that we have served over 50 clients from diverse 
              industries and unique problem statements. Our creative solutions have 
              successfully satisfied our clients' needs on time.
            </p>
            <ul className="mobile-features">
            <li>✔️ User-Centric Design</li>
            <li>✔️ Scalable Solutions</li>
            <li>✔️ Timely Delivery</li>
            <li>✔️ Cross-Platform Compatibility</li>
            <li>✔️ Robust Security</li>
          </ul>

          </div>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="icon mb-3">
            <img
              src="https://cdn-icons-png.freepik.com/256/18146/18146294.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
              alt="Healthcare Icon"
              width="50"
            />
          </div>
          <h2 className="fw-bold text-primary">Healthcare Data Management</h2>
          <p>
            Mobile Application Development provides innovative, user-centric apps tailored to
            your business needs, ensuring seamless performance, intuitive design, and 
            compatibility across various mobile platforms.
          </p>
           <ul className="healthcare-features">
            <li>📦 Electronic Health Records (EHRs)</li>
            <li>🔗 Health Information Exchanges (HIEs)</li>
            <li>📊 Demographic Information</li>
            <li>🧬 Clinical Data</li>
            <li>📚 Databases and Data Warehouses</li>
            <li>💰 Billing Information</li>
            <li>💊 Medication Records</li>
            <li>📄 Medical History</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/premium-photo/close-up-doctor-is-showing-medical-analytics-data-medical-technology-concept_33799-5605.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
            alt="Healthcare"
            className="img-fluid rounded shadow"
           />
        </div>
      </div>
    </div>
       <div className="mobileapp-section py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
  <img
    src="https://img.freepik.com/free-vector/taxi-app-concept-illustration_52683-36027.jpg?ga=GA1.1.673143158.1745498997&semt=ais_hybrid&w=740"
    alt="VMCar"
    className="img-fluid rounded shadow"
  />
</div>


          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/9835/9835786.png?ga=GA1.1.673143158.1745498997&semt=ais_hybrid"
                alt="VMCar Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">VMCar – Where every ride is first-class</h2>
            </div>
            <p className="lead text-dark">
              At VMCar, we believe your ride should be more than transportation – it should be 
              an experience. That’s why we offer seamless booking, professional drivers,
               and spotless vehicles, every time.
            </p>
            <ul className="product-points">
            <li>✔ Reliable service, spotless vehicles, and respectful drivers – that’s what makes VMCar my top choice.</li>
            <li>✔ Great cars, friendly drivers, and always on time – VMCar never lets me down.</li>
            <li>✔ Clean rides, courteous service, and punctuality – that’s the VMCar promise I trust.</li>
            <li>✔ Immaculate vehicles, professional drivers, and perfect timing – VMCar delivers excellence every time.</li>
          </ul>

          </div>
        </div>
      </div>
    </div>
  <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="icon mb-3">
            <img
              src="https://cdn-icons-png.freepik.com/256/10754/10754153.png?ga=GA1.1.673143158.1745498997&semt=ais_hybrid"
              alt="Healthcare Icon"
              width="50"
            />
          </div>
          <h2 className="fw-bold text-primary">CRM Software</h2>
          <p>
            CRM is a strategy for managing a company's interactions with current and potential customers. It uses data analysis to improve business relationships, focusing on customer retention and driving sales growth.
          </p>
           <ul className="crm-features">
            <li>📊 Data Management</li>
            <li>📞 Customer Service</li>
            <li>🤝 Collaboration</li>
            <li>🔁 Integration</li>
            <li>📈 Sales Automation</li>
            <li>📣 Marketing Automation</li>
            <li>🔐 Security</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/premium-photo/carbon-credit-co2-trading-market-carbon-tradable-certificates-buysell-business-environment-sustainable-industry-company-reduc-carbon-emissions-net-zero-greenhouse-gas-target_562859-5831.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
            alt="Healthcare"
            className="img-fluid rounded shadow"
           />
        </div>
      </div>
    </div>   
         <footer className="vigomerge-footer">
      <div className="footer-top">
        <div className="footer-column logo-section">
          <img src="Logo.png" alt="Vigomerge " className="footer-logo" />
          <h4>Vigomerge</h4>
          <p>
            Providing innovative engineering solutions with a commitment to excellence and client satisfaction.
          </p>
          <div className="social-icons">
            <div className="icon-circle">f</div>
            <div className="icon-circle">in</div>
            <div className="icon-circle">i</div>
          </div>
        </div>

        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>Software Development</li>
            <li>Robotic Process Automation</li>
            <li>Blockchain Development</li>
            <li>Cloud Solutions</li>
            <li>DevOps Automation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Industry</h4>
          <ul>
            <li>IT Industry</li>
            <li>Health Care</li>
            <li>Manufacturing</li>
            <li>E-Commerce</li>
            <li>Real Estate</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick links</h4>
          <ul>
            <li>Developer</li>
            <li>Community</li>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <p>📍 Baner Pune Maharashtra<br />411027</p>
          <p>📞 +91 9529782361</p>
          <p>📧 info@vigomerge.com</p>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>Copyright © Vigomerge Technology Pvt Ltd. All Rights Reserved</p>
        <div className="footer-bottom-links justify-content-lg-end">
          <Link to="/resources/privacypolicy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/resources/termsandconditions" className="hover:text-white">Terms of Service</Link>
            <Link to="/resources/privacypolicy" className="hover:text-white">Cookies Policy</Link>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default Product;
