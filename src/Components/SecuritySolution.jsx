import "bootstrap/dist/css/bootstrap.min.css";



const feature = [
    {
      title: 'Expertise',
      icon: '💡',
      description: 'Our team comprises industry experts with a wealth of experience in software development and AI technologies.',
    },
    {
      title: 'Innovation',
      icon: '⚙',
      description: 'We are at the forefront of technological advances, ensuring our clients benefit from the latest solutions.',
    },
    {
      title: 'Quality Assurance',
      icon: '✅',
      description: 'We adhere to the highest standards of quality and reliability in our services, ensuring successful outcomes for our clients.',
    },
    {
      title: 'Customer-Centric Approach Strategies',
      icon: '🤝',
      description: 'We prioritize our client\'s need, delivering personalized service and support throughout our partnership.',
    },
  ];




const SecuritySolutions = () => {
  return (
    <div className="security-section ">
      <h2 className="section-title justify-content-lg-start">Why Choose Vigomerge</h2>
      <div className="text-white ">
        <p className="section-subtitle">
        Our commitment to excellence and innovation sets us apart in the engineering industry
      </p>
      </div>
      <div className="card-container">
        {feature.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

 

export default SecuritySolutions;