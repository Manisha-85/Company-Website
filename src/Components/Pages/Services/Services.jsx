import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../../Navbar';
// Import external CSS
const servicesData = 
[

  {
    title: "Software Development",
    description:
      "Software Development delivers tailored solutions to meet unique business needs, enhancing efficiency, scalability, and performance while ensuring seamless integration with existing systems and future growth.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721264.png",
  },
  {
    title: "Web Application Development",
    description:
      "Web Application Development focuses on creating dynamic, user-friendly, and scalable web solutions that enhance business operations, improve customer engagement, and ensure seamless functionality across devices.",
    image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    title: "Mobile Application Development",
    description:
      "Mobile Application Development provides innovative, user-centric apps tailored to your business needs, ensuring seamless performance, intuitive design, and compatibility across various mobile platforms.",
    image: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
  },
  {
    title: "UI/UX Design",
    description:
      "UI/UX Design enhances the visual appeal and usability of digital products, ensuring intuitive interfaces and seamless user experiences that align with brand identity and user expectations.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud Solutions offer scalable, secure, and cost-effective infrastructure for deploying, managing, and scaling applications and services in a modern cloud environment.",
    image: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
  },
  {
    title: "AI/ML Integration",
    description:
      "AI/ML Integration empowers businesses with smart, data-driven insights and automation by embedding machine learning algorithms and AI capabilities into applications.",
    image: "https://cdn-icons-png.flaticon.com/512/4712/4712010.png",
  },
   {
    title: "Quality Assurance",
    description: "Quality Assurance ensures the reliability and performance of software through rigorous testing, identifying defects, and maintaining high standards for seamless user experiences and product stability.",
    image: "https://cdn-icons-png.flaticon.com/512/8127/8127520.png",
  },
  {
    title: "Block Chain Development",
    description: "Systems Integration connects disparate systems, ensuring seamless data flow, improved efficiency, and streamlined operations, allowing businesses to work more cohesively across various platforms and technologies.",
    image: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
  },
  {
    title: "Robotic Process Automation",
    description: "Robotic Process Automation (RPA) is a technology that uses software robots to automate repetitive tasks. RPA can be used in many industries, including finance, human resources, and customer service.",
    image: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
  },
];

const Services = () => {

  return (
    
    <section>
       <Navbar />
      <div className="services-container">
      <div className="services-content">
        {/* Left Content */}
        <div className="services-text">
          <h2 className="services-heading">Key Features of Our Services</h2>
          <p className="services-description">
            When you choose Vigomerge, you are not just hiring a consulting firm,
            you are collaborating with a team of dedicated professionals who are
            invested in your success.
          </p>
          <ul className="features-list">
            <li>✓ Customization</li>
            <li>✓ Scalability</li>
            <li>✓ 24/7 Support</li>
            <li>✓ Collaborative Partnership</li>
            <li>✓ Ethical Standards</li>
            <li>✓ Result-Driven Approach</li>
          </ul>
          <button className="contact-button"onClick={() => window.location.href = "/contact"} > Contact Us</button>
        </div>

      </div>

        <div className="services-container">
      <h2 className="services-heading">Explore Our Services</h2>
      <p className="services-description">
        Our team of expert engineers provides comprehensive solutions across various domains
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
    </div>
    <div className="software-section py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/software-development-3484025-2912013.png"
              alt="Software Development Illustration"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2721/2721264.png"
                alt="Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">Software Development</h2>
            </div>
            <p className="lead text-dark">
              Software Development delivers tailored solutions to meet unique business needs,
              enhancing efficiency, scalability, and performance while ensuring seamless
              integration with existing systems and future growth.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Our Software Development service is designed to provide tailored solutions
                  that align perfectly with your business objectives. We pride ourselves on
                  delivering software that is built specifically for your needs.
                </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  We understand that every business has its own goals, which is why we take a
                  collaborative approach to custom software development.
                </span>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
<div className="webapp-section py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-md-6 order-2 order-md-1">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
                alt="Web App Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">Web Application Development</h2>
            </div>
            <p className="lead text-dark">
              Web Application Development focuses on creating dynamic, user-friendly, and
              scalable web solutions that enhance business operations, improve customer
              engagement, and ensure seamless functionality across devices.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Web Application Development services are designed to empower your business
                  with robust, user-friendly, and highly functional web applications. A strong
                  web presence is essential — and our solutions are built to scale with your
                  needs.
                </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Our expert team collaborates closely with your goals, creating intuitive,
                  user-centric web apps that ensure seamless experience for your users.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="col-md-6 order-1 order-md-2">
            <img
  src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
  alt="Web Application Development"
  className="img-fluid rounded shadow"
/>

          </div>
        </div>
      </div>
    </div>
     <div className="mobileapp-section py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
  <img
    src="https://img.freepik.com/premium-photo/developing-programming-coding-technologies-with-website-design-virtual-diagram_103164-375.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
    alt="Mobile App Development"
    className="img-fluid rounded shadow"
  />
</div>


          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/18234/18234747.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
                alt="Mobile Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">Mobile Application Development.</h2>
            </div>
            <p className="lead text-dark">
              Mobile Application Development provides innovative, user-centric apps tailored to
              your business needs, ensuring seamless performance, intuitive design, and
              compatibility across various mobile platforms.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  We provide cutting-edge Mobile Application Development services designed to
                  create intuitive, high-performing mobile apps that meet your business
                  objectives. In today’s mobile-first world, this is essential for customer
                  engagement.
                </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Our approach begins with understanding your goals. We design and develop
                  custom apps that reflect your brand and enhance the user experience —
                  whether for e-commerce, CRM, or custom engagement platforms.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

     <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="icon mb-3">
            <img
              src="https://cdn-icons-png.freepik.com/256/12095/12095709.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
              alt="Cloud Icon"
              width="50"
            />
          </div>
          <h2 className="fw-bold text-primary">Cloud Solutions</h2>
          <p>
            Cloud Consulting offers expert guidance to optimize cloud infrastructure,
            streamline operations, enhance security, and ensure scalability,
            helping businesses maximize the benefits of cloud technology.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              ✅ Cloud solutions Services help businesses navigate the complexities
              of cloud technology and fully harness its potential. Cloud computing has
              transformed the way companies operate, offering flexibility, scalability,
              and cost-efficiency.
            </li>
            <li>
              ✅ Our cloud consultants work closely with your team to develop a
              strategic cloud plan, helping you move, optimize, or integrate
              infrastructure and solutions for success.
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
            alt="Cloud Solutions"
            className="img-fluid rounded shadow"
           />
        </div>
      </div>
    </div>
<div className="DevOps Automation py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038853.jpg?ga=GA1.1.673143158.1745498997&semt=ais_hybrid&w=740"
              alt="DevOps Automation
"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/3157/3157849.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
                alt="Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">DevOps Automation</h2>
            </div>
            <p className="lead text-dark">
              DevOps Automation streamlines development, testing, and deployment processes by integrating tools 
              and practices that enhance collaboration, 
              improve efficiency, and ensure faster, reliable software delivery.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  DevOps Automation Services designed to streamline your software 
                  development and deployment processes. In today’s fast-paced digital landscape, 
                  organizations must be agile and efficient to remain competitive. 
                  Our DevOps Automation solutions enable you to automate repetitive tasks, 
                  improve collaboration between development and operations teams, and 
                  accelerate the delivery of high-quality software.

                </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Our approach to DevOps Automation starts with a thorough assessment of
                   your existing workflows and processes. We work closely with your teams to 
                   identify bottlenecks and areas for improvement, ensuring that our automation 
                   solutions are tailored to your specific needs. By leveraging industry-leading 
                   tools and technologies, we help you automate critical functions such as 
                   continuous integration (CI), continuous delivery (CD), and infrastructure
                    management.


                </span>
              </li>
            </ul>
         </div>
        </div>
      </div>
    </div>
     <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="icon mb-3">
            <img
              src="https://cdn-icons-png.freepik.com/256/5278/5278402.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
              alt="AI Icon"
              width="50"
            />
          </div>
          <h2 className="fw-bold text-primary">Artificial Intelligence</h2>
          <p>
           Research and development services to create innovative solutions for complex engineering challenges.


          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              ✅ AI Services to help businesses conceptualize, structure, and transform ideas
               into robust designs. Software design is a critical step in the development
                lifecycle, enabling organizations to create clear frameworks and workflows 
                before full-scale implementation. Our experienced team collaborates with you
                 to craft designs that effectively represent functionality, user interfaces, and 
                 overall user experience.
            </li>
            <li>
              ✅Our design process begins with understanding your business goals and 
              technical requirements. We work closely with stakeholders to ensure the 
              design aligns with your vision. By utilizing industry-standard tools, we create 
              detailed design artifacts, including diagrams, wireframes, and workflows, that 
              guide the development phase. This approach minimizes the risk of costly 
              changes later and ensures project efficiency.

            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid&w=740"
            alt="Cloud Solutions"
            className="img-fluid rounded shadow"
           />
        </div>
      </div>
    </div>

  <div className="DevOps Automation py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/premium-photo/qa-quality-assurance-quality-control-concept-uds_31965-293618.jpg?ga=GA1.1.673143158.1745498997&semt=ais_hybrid&w=740"
              alt="DevOps Automation
"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/6878/6878951.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
                alt="Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">Quality Assurance</h2>
            </div>
            <p className="lead text-dark">
              Quality Assurance ensures the reliability and performance of software through 
              rigorous testing,identifying defects, and maintaining high standards for seamless
              user experiences and product stability.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                 Quality Assurance (QA) services to ensure that your software products meet
                 the highest standards of quality and performance. In today’s competitive 
                 market, delivering a flawless user experience is essential for the success of 
                 any application.

                </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Our QA process begins with a thorough understanding of your project
                   requirements and objectives. We collaborate closely with your development 
                   team to establish testing strategies tailored to your specific needs.


                </span>
              </li>
            </ul>
         </div>
        </div>
      </div>
    </div> 
      <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="icon mb-3">
            <img
              src="https://cdn-icons-png.freepik.com/256/17782/17782751.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
              alt="AI Icon"
              width="50"
            />
          </div>
          <h2 className="fw-bold text-primary">Block Chain Development</h2>
          <p>
           Systems Integration connects disparate systems, ensuring seamless data flow, 
           improved efficiency, and streamlined operations, allowing businesses to work
            more cohesively across various platforms and technologies.


          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              ✅ Systems Integration services designed to streamline your business operations
               by ensuring seamless communication and data exchange between various 
               software applications and systems. In today’s complex technology landscape,
                organizations often rely on multiple platforms, tools, and applications to
                 manage their processes.
            </li>
            <li>
              ✅Our approach to Systems Integration begins with a thorough assessment of 
              your existing systems and processes. We work closely with your team to
              understand your business requirements and identify integration challenges.

            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://img.freepik.com/premium-photo/man-holding-business-elements-icons-screen_488220-5891.jpg?ga=GA1.1.673143158.1745498997&semt=ais_hybrid&w=740"
            alt="Cloud Solutions"
            className="img-fluid rounded shadow"
           />
        </div>
      </div>
    </div> 
 <div className="DevOps Automation py-5 px-4">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/premium-photo/mechanized-industry-robot-robotic-arms-assembly-factory-production_31965-15683.jpg?ga=GA1.1.673143158.1745498997&semt=ais_hybrid&w=740"
              alt="DevOps Automation
"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://cdn-icons-png.freepik.com/256/10871/10871877.png?ga=GA1.1.1484581029.1744542308&semt=ais_hybrid"
                alt="Icon"
                className="me-2"
                width="40"
              />
              <h2 className="fw-bold text-primary m-0">Robotic Process Automation</h2>
            </div>
            <p className="lead text-dark">
              Robotic Process Automation (RPA) is a technology that uses software robots to 
              automate repetitive tasks. RPA can be used in many industries, including finance,
              human resources, and customer service.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                 Process Automation Consulting

                </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Custom Bot Developmentpecific needs.
                 </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                   System Integration
                 </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                 Intelligent Automation
                 </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                   Monitoring & Support
                 </span>
              </li>
              <li className="mb-3 d-flex">
                <span className="me-2 text-success fs-4">✔</span>
                <span>
                  Scalable solutions for businesses of all sizes
                 </span>
              </li>
            </ul>
         </div>
        </div>
      </div>
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
        <p>
          Copyrights © <span className="company-link">Vigomerge Technology Pvt Ltd</span>. All Rights Reserved
        </p>
        <div className="footer-links">
          <Link to="/resources/privacypolicy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/resources/termsandconditions" className="hover:text-white">Terms of Service</Link>
            <Link to="/resources/privacypolicy" className="hover:text-white">Cookies Policy</Link>
        </div>
      </div>
    </footer>
        
          
      
    </div>
      
    </section>
    
  );
};

export default Services;