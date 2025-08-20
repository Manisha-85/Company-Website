import React from 'react';

import heroImg from '../assets/teat-present.jpg'; // Use your own image or placeholder

const Section = () => {
  return (
    <section className="hero-section">
      <div className="hero-content text-black">
        <h1>Your Trusted Advisors in <br /> <span>Business Success.</span></h1>
        <p>
          We understand the challenges and complexities that business face in today's dynamic marketplace.
          That's why we offer a comprehensive suite of consulting services. Founded on the principles of innovation,
          integrity, and excellence, we are a team of seasoned professionals.
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Business Consulting" />
      </div>
    </section>
  );
};

export default Section;