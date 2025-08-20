import React from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
const Healthcare = () => {
  return (
    <><Navbar/>
    <div className="healthcare-container">
      <h1 className="healthcare-heading">Healthcare IT Services</h1>

      <h2 className="healthcare-subheading">Empowering Healthcare Innovation Through Technology</h2>
      <p className="healthcare-intro">
      In the rapidly evolving healthcare landscape, technology is the key to delivering better patient outcomes, improving operational efficiency, and ensuring compliance with stringent regulations. Our Healthcare IT Services bridge the gap between healthcare providers and modern technology, offering secure, scalable, and smart solutions designed to meet the unique needs of the medical industry
      </p>

      <h2 className="healthcare-subheading">Our Healthcare IT Offerings</h2>

      <div className="healthcare-section">
        <h3>1. Healthcare Data Security & Compliance</h3>
        <p>
         • HIPAA, HL7, GDPR compliance services • Data encryption, access management, and secure cloud storage • Risk assessments and vulnerability management

        </p>
      </div>

      <div className="healthcare-section">
        <h3>2. Healthcare CRM Solutions</h3>
        <p>
          • Patient engagement platforms • Personalized patient journey mapping • Appointment scheduling and follow-up management systems
        </p>
      </div>

      <div className="healthcare-section">
        <h3>3. Healthcare Analytics & Business Intelligence</h3>
        <p>
         • Predictive analytics for patient care and hospital management • Population health analytics • Real-time reporting dashboards

        </p>
      </div>

      <div className="healthcare-section">
        <h3>4. Cloud Solutions for Healthcare</h3>
        <p>
         • Cloud migration for healthcare applications • Secure cloud hosting and storage • Disaster recovery and business continuity planning

        </p>
      </div>
      <div className="healthcare-section">
        <h3>5. Mobile Health (mHealth) App Development</h3>
        <p>
          • Mobile apps for appointment booking, prescriptions, and remote care • Fitness and wellness app development • Patient portals with secure access to health records

        </p>
      </div>
      <div className="healthcare-section">
        <h3>6. IT Support and Managed Services for Healthcare</h3>
        <p>
          • 24/7 monitoring of healthcare IT infrastructure • Helpdesk and technical support services • Regular updates, patches, and maintenance
       </p>
      </div>
      <div className="healthcare-section">
        <h3>7. Why Partner With Us?</h3>
        <p>
          • Healthcare Expertise: Deep understanding of healthcare workflows, regulations, and patient-centric models. • Security First: Committed to protecting sensitive health data with industry-leading security practices. • Customized Solutions: Tailored IT strategies designed to match the unique needs of hospitals, clinics, labs, and health tech startups. • Regulatory Compliance: Ensuring all solutions meet global and local healthcare standards and guidelines. • Innovation-Driven: We integrate AI, IoT, blockchain, and cloud computing to redefine healthcare delivery.
        </p>
      </div>
      <div className="healthcare-section">
        <h3>8. Ready to Revolutionize Healthcare with Technology.</h3>
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

export default Healthcare;