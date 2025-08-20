import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './AboutUs.css';
import Navbar from '../../Navbar';
const logos = [
    "./logos/Partner meta.png",
     "./logos/Shopify.png",
    "./logos/SaleForce.jpeg",
    "./logos/Google.webp",
    "./logos/googleads.png",
    "./logos/GoogleCloud.png",
   ];
const AboutUs = () => {
  return (
 <> <Navbar/>
      <div className="about-container">
        
      <div className="about-content row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0 text-section">
         
          <h1 className="fw-bold text-primary">Welcome to Vigomerge</h1>
          <p>We specialize in delivering cutting-edge IT Product and services tailored to meet your business needs.</p>
          <p>
           We are dedicated to understanding and addressing your specific needs. Let’s explore 
           how we can assist you with a range of tailored product and services. Once we have a clear understanding of your needs,
            we can recommend specific IT solutions that align with your digital goals.
          </p>
          <p>
            The mission of our AI-based company is to harness the power of artificial 
            intelligence to solve complex problems, enhance human productivity, and drive innovation across various industries.
             We are committed to developing cutting-edge AI solutions that empower
             businesses, organizations, and individuals to thrive in the digital age.
          </p>
           <ul className="about-features">
            <li>✔Expertise</li>
            <li>✔ Customer-Centric Approach Strategies</li>
            <li>✔ Innovation</li>
            <li>✔ Quality Assurance</li>
          </ul>
          
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/premium-photo/medical-team-sitting-discussing-table-top-view_358354-11947.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
            alt="Healthcare"
            className="img-fluid rounded shadow"
           />
        </div>
      </div>

     <div className="about-container">
      <section className="intro-section">
        <h1>
          Born and raised in Pune, Maharashtra, India, I have spread to Maharashtra, India, and Japan,
          helping clients across the globe.
        </h1>
        <p>
          Founded in 2024 by Prakash Ray in Pune, Maharashtra, Vigomerge Inc. grew from 11 to 50 team members.
          In 2024, we expanded to Prakash Ray, opening our second office and embracing a global outlook. Since then,
          we've helped companies from almost every part of the globe.
        </p>
      </section>

      <div className="timeline">
        <div className="timeline-item left">
          <div className="card purple-card">
            <h3>Our Vision</h3>
            <p>
              Our vision is to be a global leader in innovative software product and services,
              transforming how businesses and individuals harness the power of technology.
            </p>
          </div>
        </div>

        <div className="timeline-line">
          <div className="dot"></div>
        </div>

        <div className="timeline-item right">
          <div className="card blue-card">
            <h3>Our Mission</h3>
            <p>
              The mission of our AI-based company is to harness the power of artificial intelligence to solve complex problems,
              enhance human productivity, and drive innovation across various industries.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="footer-wrapper">
      {/* Partners Section */}
      <div className="partners-section">
        <h2>Our Partners</h2>
       <motion.div
        className="moving-logos"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <div className="logos-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt={`client-logo-${index}`} className="logo-img" />
            </div>
          ))}
        </div>
      </motion.div>
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
            <li><Link to="/developer">Developer</Link></li>
            <li><Link to="/community" className="hover:text-white">Community</Link></li>
           <Link to="/privacypolicy" className="hover:text-white">Privacy Policy</Link>
            <li><Link to="/terms&conditions" className="hover:text-white">Terms & Conditions</Link></li>
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
        <p>
          Copyrights © <span className="company-link">Vigomerge Technology Pvt Ltd</span>. All Rights Reserved
        </p>
        <div className="footer-links">
          <Link to="/privacypolicy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/termsandconditions" className="hover:text-white">Terms of Service</Link>
            <Link to="/privacypolicy" className="hover:text-white">Cookies Policy</Link>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default AboutUs;