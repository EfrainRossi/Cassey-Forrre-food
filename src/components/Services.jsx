import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

export default function Services({ onOrderClick }) {
  const { servicesSection } = business;

  return (
    <section
      id="services"
      className="section"
      style={{
        backgroundColor: 'var(--color-secondary-subtle)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          subtitle={servicesSection.subtitle}
          align="left"
        />

        {/* 3-column elevated responsive grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {servicesSection.items.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOrderClick={onOrderClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
