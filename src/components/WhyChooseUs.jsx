import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  const { whyChooseUs } = business;

  return (
    <section
      id="why-choose-us"
      className="section"
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-text-light)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
          light={true}
          align="left"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {whyChooseUs.items.map((item) => (
            <div
              key={item.number}
              style={{
                backgroundColor: 'var(--color-card-dark)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border-dark)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 185, 150, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-dark)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 500,
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-16)',
                  lineHeight: 1,
                }}
              >
                {item.number}
              </span>

              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--color-text-light)',
                  marginBottom: 'var(--space-12)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'var(--color-text-light-muted)',
                  fontSize: '0.94rem',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
