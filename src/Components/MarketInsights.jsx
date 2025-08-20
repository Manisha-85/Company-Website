const services = [
  {
    title: 'Strategic Planning Services',
    description: 'Business consultants can assist clients in developing long-term strategic plans to achieve their goals.',
    icon: '🛠️',
  },
  {
    title: 'Market Research & Analysis',
    description: 'Conduct thorough market research to provide insights into market trends, customer behaviors, and others.',
    icon: '📊',
  },
  {
    title: 'Operations Improvement',
    description: 'Evaluate and improve business processes, workflows, and efficiency to enhance productivity and reduce costs.',
    icon: '📈',
  },
  {
    title: 'Organizational Development',
    description: 'Provide guidance on organizational effectiveness, structure, and people development.',
    icon: '👥',
  },
  {
    title: 'Financial Consulting',
    description: 'Financial analysis, budgeting, forecasting, and strategic advice to improve financial performance.',
    icon: '💰',
  },
  {
    title: 'Change Management',
    description: 'Assist businesses in managing change initiatives and smooth transitions.',
    icon: '🔄',
  },
   
];

const MarketInsights = () => {
  return (
    <section className="market-section">
      <h2>Market Insights & Analysis</h2>
      <p className="subtitle">
        Help businesses optimize their operations, reach their objectives, and remain competitive in today’s fast-paced market.
      </p>
      <div className="card-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketInsights;