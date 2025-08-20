import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
const Developer = () => {
  return (
    <><Navbar/>
    <div className="developer-container">
      <h1 className="developer-heading">Developer</h1>

      <h2 className="developer-subheading">Expert Developers, Tailored Solutions</h2>
      <p className="developer-intro">
        At the core of every successful digital project is strong development expertise. Our Developer Services empower businesses 
        to build powerful, scalable, and innovative technology solutions. Whether you need to extend your in-house team, build a product 
        from scratch, or accelerate your digital transformation, our skilled developers are here to bring your vision to life.
      </p>

      <h2 className="developer-subheading">Our Developer Expertise</h2>

      <div className="expertise-section">
        <h3>1. Web Development</h3>
        <p>
          • Custom website development • Front-end and back-end development • Responsive, mobile-first design • CMS development 
          (WordPress, Drupal, Joomla)
        </p>
      </div>

      <div className="expertise-section">
        <h3>2. Mobile App Development</h3>
        <p>
          • Native iOS and Android applications • Cross-platform app development (Flutter, React Native) • Mobile UI/UX design and 
          optimization • App maintenance and updates
        </p>
      </div>

      <div className="expertise-section">
        <h3>3. Software Development</h3>
        <p>
          • Custom software solutions tailored to business needs • SaaS product development • API development and integration • Software 
          modernization and reengineering
        </p>
      </div>

      <div className="expertise-section">
        <h3>4. E-Commerce Development</h3>
        <p>
          • E-commerce platform development • Payment gateway integration • Shopping cart solutions • Custom plugins/modules for 
          e-commerce platforms
        </p>
      </div>
      <div className="expertise-section">
        <h3>5. Cloud Application Development</h3>
        <p>
          • Cloud-native application design • Serverless architecture and microservices • Cloud migration and optimization (AWS, Azure, Google Cloud)
        </p>
      </div>
      <div className="expertise-section">
        <h3>6. Dedicated Development Teams</h3>
        <p>
          • Hire full-time or part-time developers • Staff augmentation to extend your in-house team • Agile teams for faster project delivery
       </p>
      </div>
      <div className="expertise-section">
        <h3>7. Emerging Technology Solutions</h3>
        <p>
          • Blockchain development • AI and Machine Learning integration • Internet of Things (IoT) applications • AR/VR app development

        </p>
      </div>
      <div className="expertise-section">
        <h3>8. Our Development Stack</h3>
        <p>
          • Frontend: React.js, Angular, Vue.js, HTML5, CSS3, JavaScript • Backend: Node.js, PHP, Python, Java, .NET, Ruby on Rails • Mobile: Swift, Kotlin, Flutter, React Native • Database: MySQL, PostgreSQL, MongoDB, Firebase • Cloud: AWS, Microsoft Azure, Google Cloud Platform
        </p>
      </div>
      <div className="expertise-section">
        <h3>9. Why Choose Us</h3>
        <p>
          • Experienced Developers: A team with deep technical knowledge and industry certifications. • Flexible Engagement Models: Full-time, part-time, or project-based hiring to fit your needs. • Agile Methodology: Fast, transparent, and efficient development cycles. • Commitment to Quality: Rigorous testing, code reviews, and quality assurance processes. • End-to-End Support: From initial consultation to post-launch maintenance and support.

        </p>
      </div>
      <div className="expertise-section">
        <h3>10. Build the Future With Us</h3>
        <p>
         Looking for expert developers to turn your ideas into reality. Contact us today for a free consultation and discover how we can help you succeed.
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

export default Developer;