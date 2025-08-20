import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>

      
      <p>
        Welcome to Vigomerge Inc.! These Terms and Conditions (“Terms”) govern your access to and use of our website, services, software, and any related offerings (collectively, the “Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
      </p>
     <div className="terms-subheading">
        <h3>1. Use of Services</h3>
        <p>
          You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information you provide is accurate, current, and complete.
          You may not:
        • Use our Services in violation of any applicable laws or regulations • Attempt to gain unauthorized access to systems or networks connected to our platform • Distribute malware, spam, or harmful code • Interfere with or disrupt the functionality of our Services
        </p>
      </div>
      <div className="terms-subheading">
        <h3>2. Intellectual Property</h3>
        <p>
          All content and materials on our website and platforms—including software, logos, graphics, text, and design—are the intellectual property of Vigomerge Inc or our licensors. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.

        </p>
      </div>
      <div className="terms-subheading">
        <h3>3. Service Availability and Modifications</h3>
        <p>
          We strive to ensure high availability of our Services but do not guarantee uninterrupted access. We may modify, update, suspend, or discontinue parts or all of our Services at any time, with or without notice

        </p>
      </div>
      <div className="terms-subheading">
        <h3>4. Payment and Subscriptions (If Applicable)</h3>
        <p>
          If your use of our Services requires payment:

         • All fees are stated in dollar, Inr, Pound and all and are due as specified at the time of purchase or subscription. • Late payments may result in suspension or termination of Services. • Subscription services may automatically renew unless canceled prior to the renewal date
        </p>
      </div>
       <div className="terms-subheading">
        <h3>5. Termination</h3>
        <p>
          We may suspend or terminate your access to our Services at any time, with or without cause or notice, if you violate these Terms or engage in any harmful or illegal conduct. You may stop using our Services at any time. Provisions regarding intellectual property, disclaimers, limitations of liability, and governing law will survive termination.

        </p>
      </div>
       <div className="terms-subheading">
        <h3>6. Governing Law</h3>
        <p>
         These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes shall be resolved in the courts located in [Jurisdiction].
        </p>
      </div>
       <div className="terms-subheading">
        <h3>3. Service Availability and Modifications</h3>
        <p>
          These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes shall be resolved in the courts located in [Jurisdiction].


        </p>
      </div>
       <div className="terms-subheading">
        <h3>7. Changes to These Terms</h3>
        <p>
          We may update these Terms from time to time. If we make significant changes, we will notify you via our website or by email. Continued use of the Services after changes take effect constitutes your agreement to the revised Terms.
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
      </>
  );
};

export default TermsAndConditions;