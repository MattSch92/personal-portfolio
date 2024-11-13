// Services.js
import React from 'react';
import './Services.css';

function Services() {
  const services = [
    'Front-End Development', 'Responsive Design', 'JavaScript Development', 
    'React Apps', 'UI/UX Design', 'Search Engine Optimization', 'Single Page Applications',
    'Performance Optimization', 'Component Development', 'Mobile-First Design',
    'Cross-Browser Compatibility', 'API Integration', 'Testing & Debugging',
    'State Management', 'Maintenance and Support'
  ];

  return (
    <section className="services">
      <h2>My Services</h2>
      <div className="service-ticker">
        <div className="service-list">
          {services.map((service, index) => (
            <div className="service-item" key={index}>{service}</div>
          ))}
          {services.map((service, index) => (
            <div className="service-item" key={index + services.length}>{service}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
