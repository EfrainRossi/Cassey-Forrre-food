import React from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Testimonials() {
  // Rendered ONLY if real testimonials exist in configuration
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="section"
      style={{
        backgroundColor: 'var(--color-secondary-subtle)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="Guest Impressions"
          title="What our patrons say"
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.testimonials.map((review, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-card-bg)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-32)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-rest)',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-main)',
                  marginBottom: 'var(--space-16)',
                }}
              >
                "{review.quote}"
              </p>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--color-accent)',
                  margin: 0,
                }}
              >
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
