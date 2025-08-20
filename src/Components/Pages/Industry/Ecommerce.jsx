import React from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
const ECommerce = () => {
  return (
    <>
    <Navbar/>
    <div className="ecomerce-container">
      <h1 className="ecomerce-heading">E-Commerce</h1>

      <h2 className="ecomerce-subheading">Powering Digital Commerce with Innovative Technology</h2>
      <p className="ecomerce-intro">
      In today’s digital-first world, a strong e-commerce presence is crucial for success. Our E-Commerce IT Services help businesses build, scale, and optimize online stores with cutting-edge technology solutions, seamless user experiences, and robust security. We empower brands to deliver exceptional digital shopping experiences that drive growth and customer loyalty

      </p>

      <div className="ecomerce-section">
        <h3>1. E-Commerce Website & App Development</h3>
        <p>
          • Custom e-commerce website design and development • Mobile-first and responsive designs • iOS and Android mobile app development • Progressive Web Apps (PWAs) for enhanced user engagement
         </p>
      </div>

      <div className="ecomerce-section">
        <h3>2. Platform Expertise</h3>
        <p>
          • Shopify, Magento, WooCommerce, BigCommerce, Salesforce Commerce Cloud • Headless commerce solutions • Platform migration and upgrade services
        </p>
      </div>

      <div className="ecomerce-section">
        <h3>3. Custom E-Commerce Solutions</h3>
        <p>
        • Tailored shopping cart and checkout experiences • Multi-vendor marketplace development • Subscription and membership platform setup
        </p>
      </div>

      <div className="ecomerce-section">
        <h3>4. Payment Gateway Integration</h3>
        <p>
         • Secure and seamless payment processing • Support for multiple currencies and global transactions • Fraud detection and prevention solutions

        </p>
      </div>
      <div className="ecomerce-section">
        <h3>5. E-Commerce SEO & Digital Marketing</h3>
        <p>
         • Search engine optimization (SEO) for online stores • Pay-per-click (PPC) and retargeting campaigns • Email marketing automation and CRM integration
        </p>
      </div>
      <div className="ecomerce-section">
        <h3>6.  Inventory and Order Management Systems</h3>
        <p>
          • Real-time inventory tracking • Automated order processing and fulfillment integration • Omnichannel sales solutions (online, in-store, mobile)
       </p>
      </div>
      <div className="ecomerce-section">
        <h3>7. Cloud and Hosting Solutions</h3>
        <p>
         • Scalable cloud hosting for high-traffic e-commerce sites • Performance optimization and load balancing • 24/7 site monitoring and technical support

        </p>
      </div>
      <div className="ecomerce-section">
        <h3>8. Cybersecurity and Compliance</h3>
        <p>
         • PCI DSS compliance for secure transactions • Data protection and user privacy solutions • Regular security audits and vulnerability management
        </p>
      </div>
      <div className="ecomerce-section">
        <h3>9. Why Partner With Us?</h3>
        <p>
         • E-Commerce Expertise: Years of experience building high-converting, secure online stores. • Customization First: We deliver tailored solutions that reflect your brand and business goals. • Omnichannel Focus: Creating seamless shopping experiences across web, mobile, and physical stores. • Security-Centric: Protecting your business and customer data with enterprise-grade security practices. • Scalable Solutions: Whether you’re a startup or an enterprise, our solutions grow with your business
        </p>
      </div>
      <div className="ecomerce-section">
        <h3>10. Let's Build the Future of E-Commerce Together</h3>
        <p>
        Ready to launch or upgrade your e-commerce platform? Contact us today for a free consultation and let’s bring your vision to life.
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

export default ECommerce;