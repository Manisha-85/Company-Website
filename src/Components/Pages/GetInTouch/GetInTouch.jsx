import React from 'react';
import './GetInTouch.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
const GetInTouch = () => {
  return (
    <> <Navbar/>
    <div className="contact-page">
      
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading">
        Have questions or ready to discuss your project? Our team is here to help.
      </p>

      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <strong>Our Location</strong>
              <p>Baner Pune Maharashtra 411027</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <strong>Phone Number</strong>
              <p>+91 9529782361</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <strong>Management and Invester</strong>
              <p>prakash@vigomerge.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <strong>Business Head & Operation Manager</strong>
              <p>arup@vigomerge.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <strong>Sales Management</strong>
              <p>info@vigomerge.com<br />business@vigomerge.com</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="John Doe" required />
              <input type="email" placeholder="example@domain.com" required />
            </div>

            <input type="text" placeholder="+91 00000-00000" required />
            <input type="text" placeholder="Project Inquiry" required />
            <textarea placeholder="Tell us about your project..." required></textarea>

            <button type="submit">Send Message</button>

          </form>
          
        </div>
        
      </div>
       <section className="location-section">
      <button className="join-button">Join Our Team</button>
      <h2 className="location-heading">Our Location</h2>
      <p className="location-subheading">
        Visit our headquarters in Pune Maharashtra or connect with us remotely
      </p>

      <div className="location-grid">
        <div className="location-card">
          <h4>HQ</h4>
          <p>
            Office 201, 2nd Floor, Anandi Complex,<br />
            Near Ganpati Chowk, Vishal Nagar,<br />
            Pimpale Nilakh, Wakad, Pune,<br />
            Maharashtra 411027
          </p>
        </div>

        <div className="location-card">
          <h4>Branch Office</h4>
          <p>
            Bestech Business Tower Tower-A,<br />
            Parkview Residence Colony, Sector 66,<br />
            Sahibzada Ajit Singh Nagar, Chandigarh<br />
            160066
          </p>
        </div>

        <div className="location-card">
          <h4>Japan Office</h4>
          <p>
            1919-1 Tancha, Onna-son,<br />
            Kunigami-gun,<br />
            Okinawa, Kunigami, Japan 9040497
          </p>
        </div>
      </div>
    </section>
      <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-box">
        <h3>What types of projects do you handle?</h3>
        <p>
          We handle a wide range of engineering projects including Custom Software Development,
          Web Application Development, Mobile Application Development, Cloud Consulting,
          DevOps Automation, Software Design and more. Our team has experience across multiple
          industries and project scales.
        </p>
      </div>

      <div className="faq-box">
        <h3>How do I request a quote for my project?</h3>
        <p>
          You can request a quote by filling out our Get in Touch form, calling our office directly,
          or sending us an email with your project details. Our team will get back to you within
          24–48 hours to discuss your requirements and provide a customized solution.
        </p>
      </div>

      <div className="faq-box">
        <h3>Do you work on international projects?</h3>
        <p>
          Yes, Vigomerge has experience working on international projects across multiple continents.
          We have the expertise to navigate different regulatory environments and can provide remote
          or on-site services depending on project requirements.
        </p>
      </div>

      <div className="faq-box">
        <h3>What is your approach to sustainable engineering?</h3>
        <p>
          My approach to sustainable engineering is centered on designing systems 
          and solutions that meet present needs without compromising the ability of future generations to meet theirs.
        </p>
      </div>
    </section>
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

export default GetInTouch;