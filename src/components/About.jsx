import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Utensils, MapPin } from 'lucide-react';

export default function About({ onOrderClick }) {
  const { about, phoneRaw, phone } = business;

  return (
    <section
      id="about"
      className="section"
      style={{
        backgroundColor: 'var(--color-secondary-light)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Image with Luxury Framing */}
          <div
            style={{
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-rest)',
                border: '1px solid var(--color-border)',
                backgroundColor: '#1E1C1A',
              }}
            >
              <img
                src={about.image}
                alt={about.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Subtle floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 'var(--space-24)',
                left: 'var(--space-24)',
                backgroundColor: 'rgba(18, 18, 18, 0.92)',
                backdropFilter: 'blur(8px)',
                color: 'var(--color-text-light)',
                padding: 'var(--space-16) var(--space-24)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(212, 185, 150, 0.3)',
                boxShadow: 'var(--shadow-dark)',
                maxWidth: '280px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <MapPin size={14} color="var(--color-secondary)" />
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  Local Kitchen
                </span>
              </div>
              <p
                style={{
                  color: 'var(--color-text-light)',
                  fontSize: '0.86rem',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {about.imageCaption}
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span className="eyebrow">{about.eyebrow}</span>
            <h2
              style={{
                marginBottom: 'var(--space-24)',
                color: 'var(--color-text-main)',
              }}
            >
              {about.title}
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {about.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.68,
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Blockquote highlight */}
            <blockquote
              style={{
                borderLeft: '3px solid var(--color-accent)',
                paddingLeft: 'var(--space-16)',
                margin: '0 0 var(--space-32) 0',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'var(--color-text-main)',
              }}
            >
              "{about.highlightQuote}"
            </blockquote>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-16)',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="primary"
                onClick={onOrderClick}
                style={{
                  padding: '14px 28px',
                }}
              >
                Order Online
              </Button>
              <Button
                as="a"
                href={`tel:${phoneRaw}`}
                variant="secondary"
                style={{
                  padding: '14px 24px',
                }}
              >
                Call {phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
