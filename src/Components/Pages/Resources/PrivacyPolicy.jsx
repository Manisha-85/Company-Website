import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

const PrivacyPolicy = () => {
  return (
    <><Navbar/>
    <div className="privacy-container">
      <h2 className="privacy-heading">Privacy and Policy</h2>
      <p className="privacy-subtext">
        Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
      </p>
      <p className="privacy-subtext">
        We may update this policy from time to time. Please check back periodically for any changes.
      </p>

      <div className="privacy-section">
        <h3>1. Introduction</h3>
        <p>
          Vigomerge Technology is committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website, use our services, or interact
          with us. By accessing our services, you agree to the terms of this Privacy Policy. If you do not agree,
          please do not use our services.
        </p>
      </div>

      <div className="privacy-section">
        <h3>2. Information We Collect</h3>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>A. Personal Information:</strong> Name, Email address, Phone number, Company name, Job title,
            Payment details (for paid services)
          </li>
          <li>
            <strong>B. Non-Personal Information:</strong> Browser type & version, IP address, Device information,
            Cookies & tracking data
          </li>
          <li>
            <strong>C. How We Collect Information:</strong> Directly from you (e.g., forms, registrations, inquiries),
            Automatically via cookies & analytics tools, From third-party services (e.g., CRM, marketing platforms)
          </li>
        </ul>
      </div>

      <div className="privacy-section">
        <h3>3. Sharing & Disclosure of Information</h3>
        <p>We may share your data with:</p>
        <ul>
          <li>Service providers</li>
          <li>Business partners (with your consent)</li>
          <li>Legal authorities (if required by law)</li>
        </ul>
      </div>
      <div className="privacy-section">
        <h3>4. Data Security</h3>
        <p>We implement industry-standard security measures, including: Encryption (SSL/TLS) , Access controls , Regular security audits , However, no method is 100% secure, and we cannot guarantee absolute security.</p>
        
      </div>
       <div className="privacy-section">
        <h3>5. Cookies & Tracking Technologies</h3>
        <p>We use cookies to: Enhance user experience , Analyze website traffic , Personalize content , You can disable cookies in your browser settings, but some features may not work properly</p>
      </div>
      <div className="privacy-section">
        <h3>6. Your Privacy Rights</h3>
        <p>Depending on your location, you may have the right to: Access, correct, or delete your data , Opt out of marketing communications , Restrict or object to processing , Data portability , To exercise these rights, contact us at info@vigomerge.com.</p>
      </div>
      <div className="privacy-section">
        <h3>7. Contact Us</h3>
        <p>For questions or requests regarding this Privacy Policy, contact us at: info@vigomerge.com.</p>
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

export default PrivacyPolicy;