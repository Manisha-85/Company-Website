import React from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
const Community = () => {
  return (
    <><Navbar/>
    <div className="community-container">
      <h1 className="community-heading">Community</h1>

      <h2 className="community-subheading">Building Stronger Connections Through Technology</h2>
      <p className="community-intro">
       At the heart of every successful IT company is a thriving community — of clients, developers, partners, and innovators. Our Community Services are designed to foster collaboration, knowledge sharing, and growth. We create platforms, programs, and engagement strategies that strengthen relationships, drive brand loyalty, and create opportunities for collective success.
      </p>

      <h2 className="community-subheading">Our Community Building Solutions</h2>

      <div className="community-section">
        <h3>1. Online Community Platform Development</h3>
        <p>
          • Participate in technical discussions • Share knowledge and best practices • Get answers to your coding queries
        </p>
      </div>

      <div className="community-section">
        <h3>2. Community Engagement Programs</h3>
        <p>
          • Online events, webinars, and virtual meetups • Hackathons, coding competitions, and challenges • Loyalty programs, ambassador networks, and influencer partnerships


        </p>
      </div>

      <div className="community-section">
        <h3>3. Knowledge Sharing and Learning Platforms</h3>
        <p>
          • E-learning portals for professional development • Resource libraries, documentation hubs, and FAQs • Certification programs and training courses

        </p>
      </div>

      <div className="community-section">
        <h3>4. Social Media and Community Management</h3>
        <p>
          • Social community creation (LinkedIn groups, Discord, Slack, etc.) • Content creation, moderation, and community support • Audience growth strategies and engagement analytics
        </p>
      </div>
      <div className="community-section">
        <h3>5. Events and Meetups</h3>
        <p>
          • In-person and virtual conference support • Community-led workshops, seminars, and hack days • Sponsorship and partnership management

        </p>
      </div>
      <div className="community-section">
        <h3>6. Feedback and Collaboration Tools</h3>
        <p>
          • Community feedback loops for product improvement • Idea submission platforms and innovation hubs • Beta testing communities for new product launches
        </p>
      </div>
      <div className="community-section">
        <h3>7. Developer and Partner Communities</h3>
        <p>
          • Developer evangelism programs • API and open-source community building • Partner portal creation and engagement strategies

        </p>
      </div>
      <div className="community-section">
        <h3>8. Why Invest in Community.</h3>
        <p>
         • Stronger Brand Loyalty: A thriving community keeps users, clients, and developers engaged for the long term. • Faster Innovation: Direct community feedback accelerates product and service improvement. • Business Growth: An engaged community acts as a powerful referral engine. • Trust and Advocacy: Communities build authentic brand advocates who amplify your reach. • Talent Attraction: Vibrant communities attract top developers, partners, and customers

        </p>
      </div>
      <div className="community-section">
        <h3>9. Let's Grow Together</h3>
        <p>
          Ready to build a vibrant community around your brand and services. Get in touch today and discover how we can create meaningful connections that fuel your growth.
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

export default Community;