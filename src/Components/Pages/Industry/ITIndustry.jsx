import React from 'react';

import { Link } from 'react-router-dom';
const ITIndustry = () => {
  return (
    <div className="ITIndustry-container">
      <h1 className="ITIndustry-heading">IT Industry</h1>

      <h2 className="ITIndustry-subheading">Transforming Businesses Through Innovative Technology Solutions</h2>
      <p className="ITIndustry-intro">
       In today's fast-paced digital world, businesses need reliable, scalable, and innovative IT services to stay ahead of the curve. Our IT Industry Services are designed to empower organizations by delivering cutting-edge technology solutions that enhance efficiency, security, and growth.

      </p>

      <h2 className="ITIndustry-subheading">We work</h2>

      <div className="ITIndustry-section">
        <h3>1. IT Consulting</h3>
        <p>
          • Strategic IT planning aligned with your business goals • Digital transformation advisory • Technology roadmap development • Risk assessment and compliance consulting
        </p>
      </div>

      <div className="ITIndustry-section">
        <h3>2. Software Development</h3>
        <p>
          • Custom application development • Mobile app development (iOS, Android, Cross-platform) • Web development and modernization • Software integration and API services
        </p>
      </div>

      <div className="ITIndustry-section">
        <h3>3. Managed IT Services</h3>
        <p>
          • 24/7 network monitoring and management • Help desk and technical support • Cloud services management (AWS, Azure, Google Cloud) • Disaster recovery and backup solutions
        </p>
      </div>

      <div className="ITIndustry-section">
        <h3>4. Cloud Solutions</h3>
        <p>
          • Cloud migration and deployment • SaaS, PaaS, and IaaS implementations • Hybrid and multi-cloud environments • Cloud optimization and cost management
        </p>
      </div>
      <div className="ITIndustry-section">
        <h3>5. Emerging Technologies</h3>
        <p>
          • AI and machine learning solutions • Blockchain development • Internet of Things (IoT) applications • Robotic Process Automation (RPA)
        </p>
      </div>
      <div className="ITIndustry-section">
        <h3>6. Why Choose Us?</h3>
        <p>
          • Industry Expertise: Decades of combined experience across multiple industries. • Tailored Solutions: Customized IT strategies for businesses of all sizes. • Cutting-Edge Technology: We integrate the latest innovations to future-proof your business. • Customer-Centric Approach: Our solutions are designed around your needs and challenges. • 24/7 Support: Dedicated teams available whenever you need assistance.
        </p>
      </div>
      <div className="ITIndustry-section">
        <h3>7. Let’s Build the Future Together</h3>
        <p>
         Ready to transform your business with world-class IT services? [Contact us] today for a free consultation
        </p>
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
  );
};

export default ITIndustry;