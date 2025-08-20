import React from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
const Manufacturing = () => {
  return (
    <><Navbar/>
    <div className="manufacturing-container">
      <h1 className="manufacturing-heading">Manufacturing</h1>

      <h2 className="manufacturing-subheading">Driving Smart Manufacturing Through Innovative Technology</h2>
      <p className="manufacturing-intro">
      In the age of Industry 4.0, manufacturers must harness the power of technology to stay competitive, optimize production, and meet evolving customer demands. Our Manufacturing IT Services deliver smart, scalable, and secure solutions that streamline operations, enhance productivity, and enable digital transformation across the manufacturing value chain.
      </p>

      <h2 className="manufacturing-subheading">Our Manufacturing IT Solutions</h2>

      <div className="manufacturing-section">
        <h3>1. Smart Factory Solutions</h3>
        <p>
         • IoT-enabled manufacturing processes • Real-time monitoring and predictive maintenance • Industrial automation and robotics integration
        </p>
      </div>

      <div className="manufacturing-section">
        <h3>2. ERP and MES Systems</h3>
        <p>
          • Enterprise Resource Planning (ERP) implementation and customization • Manufacturing Execution Systems (MES) development • System integration for end-to-end visibility across operations
        </p>
      </div>

      <div className="manufacturing-section">
        <h3>3. Supply Chain Management Solutions</h3>
        <p>
        • Supply chain digitization and optimization • Inventory management and demand forecasting tools • Vendor and logistics tracking platforms
        </p>
      </div>

      <div className="manufacturing-section">
        <h3>4. Cloud Solutions for Healthcare</h3>
        <p>
         • Cloud migration for healthcare applications • Secure cloud hosting and storage • Disaster recovery and business continuity planning

        </p>
      </div>
      <div className="manufacturing-section">
        <h3>5. Data Analytics and Business Intelligence</h3>
        <p>
         • Production and quality data analytics • Predictive analytics for maintenance and demand planning • Custom dashboards for real-time decision-making
        </p>
      </div>
      <div className="manufacturing-section">
        <h3>6. IT Support and Managed Services</h3>
        <p>
          • 24/7 infrastructure monitoring • Helpdesk services and technical support • Ongoing system maintenance and optimization
       </p>
      </div>
      <div className="manufacturing-section">
        <h3>7. Why Choose Us?</h3>
        <p>
         • Industry 4.0 Expertise: We bring deep knowledge of digital transformation strategies for manufacturing environments. • End-to-End Solutions: From factory floor automation to enterprise-wide analytics, we deliver comprehensive IT services. • Security and Compliance: Protecting critical manufacturing data and ensuring compliance with global regulations. • Tailored Approach: Customized IT strategies to fit the unique processes and needs of each manufacturer. • Innovation Focus: Leveraging AI, IoT, and machine learning to build future-ready manufacturing ecosystems.
        </p>
      </div>
      <div className="manufacturing-section">
        <h3>8. Transform Your Manufacturing with Smart IT Solutions.</h3>
        <p>
         Let’s create smarter, safer, and more connected healthcare solutions together. info@vigomerge.com with us
        </p>
      </div>
     
      <footer className="vigomerge-footer">
      <div className="footer-top">
        <div className="footer-column logo-section">
          <img src="Logo.png" alt="Vigomerge " className="footer-logo" />
          <h4>Vigomerge</h4>
          <p>
            Let’s work together to build smarter factories, agile supply chains, and future-proof production systems. Connect with us.
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

export default Manufacturing;