import React from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
const RealEstate = () => {
  return (
    <>
    <Navbar/>
    <div className="realestate-container">
      <h1 className="realestate-heading">Real Estate</h1>

      <h2 className="realestate-subheading">Transforming Real Estate with Smart Technology Solutions</h2>
      <p className="realestate-intro">
      In a competitive and rapidly evolving market, real estate businesses need innovative IT solutions to better manage properties, connect with buyers and sellers, and streamline operations. Our Real Estate IT Services empower real estate agencies, property management firms, and developers with cutting-edge technology designed to enhance efficiency, improve customer engagement, and drive growth.
     </p>

      <div className="realestate-section">
        <h3>1. Real Estate Website & Portal Development</h3>
        <p>
          • Custom property listing websites • Responsive, mobile-friendly designs • Advanced search filters, maps, and virtual tours • CRM integration for lead management
         </p>
      </div>

      <div className="realestate-section">
        <h3>2. Property Management Software Solutions</h3>
        <p>
         • Tenant and lease management platforms • Maintenance request tracking and automation • Online rent payment and billing systems • Document management and e-signature integrations
        </p>
      </div>

      <div className="realestate-section">
        <h3>3. Real Estate Mobile App Development</h3>
        <p>
        • Native iOS and Android apps for buyers, sellers, and agents • Virtual property tour integration • Push notifications for property updates and offers
        </p>
      </div>

      <div className="realestate-section">
        <h3>4. CRM and Lead Management Solutions</h3>
        <p>
         • Customer Relationship Management (CRM) systems tailored for real estate • Lead capture, nurturing, and automated communication workflows • Integration with major listing platforms and marketing channels
        </p>
      </div>
      <div className="realestate-section">
        <h3>5. Virtual Reality (VR) and Augmented Reality (AR) Solutions</h3>
        <p>
         • 3D property tours and virtual staging • AR apps for immersive property visualization • Remote property viewing experiences
        </p>
      </div>
      <div className="realestate-section">
        <h3>6. Cloud Solutions for Real Estate</h3>
        <p>
          • Cloud-based document storage and sharing • Scalable hosting solutions for property portals • Disaster recovery and data backup services
       </p>
      </div>
      <div className="realestate-section">
        <h3>7. Data Analytics and Business Intelligence</h3>
        <p>
         • Market trend analysis and property valuation tools • Sales forecasting and performance tracking • Customer behavior analytics to optimize marketing strategies

        </p>
      </div>
      <div className="realestate-section">
        <h3>8. Why Choose Us?</h3>
        <p>
         • Industry Expertise: Deep understanding of real estate operations and client expectations. • Customized Solutions: Tailor-made IT services to match your business size and goals. • Future-Ready Technology: Implementing AI, VR, AR, and cloud technologies to modernize real estate operations. • Security and Reliability: Ensuring the highest standards of data protection and operational uptime. • Client-Centric Approach: We focus on delivering results that drive sales, improve management, and delight customers.
        </p>
      </div>
      <div className="realestate-section">
        <h3>9. Reimagine Real Estate with Technology</h3>
        <p>
         Ready to digitize and elevate your real estate business. Connect with us today for a free consultation and discover how our IT solutions can unlock new opportunities
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

export default RealEstate;