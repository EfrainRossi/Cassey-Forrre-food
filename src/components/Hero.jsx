import React from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { MapPin, Phone, ArrowDown } from 'lucide-react';

export default function Hero({ onOrderClick }) {
  const { hero, phoneRaw, phone, mapsUrl } = business;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-primary-dark)',
        paddingTop: 'calc(var(--nav-height) + var(--space-48))',
        paddingBottom: 'var(--space-64)',
        overflow: 'hidden',
      }}
    >
      {/* Full-bleed background image with single tonal luxury overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${hero.bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Restrained dark tonal overlay for contrast & readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.72) 0%, rgba(10, 10, 10, 0.85) 60%, rgba(10, 10, 10, 0.95) 100%)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow: City + Business Type */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(212, 185, 150, 0.12)',
            border: '1px solid rgba(212, 185, 150, 0.3)',
            marginBottom: 'var(--space-24)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-secondary)',
            }}
          >
            {hero.eyebrow}
          </span>
        </div>

        {/* Large Confident H1 */}
        <h1
          style={{
            color: 'var(--color-text-light)',
            maxWidth: '900px',
            marginBottom: 'var(--space-24)',
            textWrap: 'balance',
            fontWeight: 400,
            lineHeight: 1.15,
          }}
        >
          {hero.title}
        </h1>

        {/* Short supporting line */}
        <p
          style={{
            color: 'rgba(248, 246, 240, 0.82)',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            lineHeight: 1.65,
            maxWidth: '62ch',
            marginBottom: 'var(--space-48)',
          }}
        >
          {hero.subtitle}
        </p>

        {/* Primary CTA + Secondary CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-16)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-48)',
          }}
        >
          <Button
            variant="beige"
            onClick={onOrderClick}
            style={{
              padding: '16px 36px',
              fontSize: '1rem',
            }}
          >
            {hero.ctaPrimary}
          </Button>

          <Button
            as="a"
            href="#services"
            variant="ghost-light"
            style={{
              padding: '16px 32px',
              fontSize: '1rem',
            }}
          >
            {hero.ctaSecondary}
          </Button>
        </div>

        {/* Quiet Trust Line Below */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-24)',
            flexWrap: 'wrap',
            paddingTop: 'var(--space-24)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            color: 'rgba(248, 246, 240, 0.7)',
            fontSize: '0.9rem',
          }}
        >
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(248, 246, 240, 0.78)',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 240, 0.78)')}
          >
            <MapPin size={16} color="var(--color-secondary)" />
            <span>{hero.trustBadge}</span>
          </a>

          <span style={{ opacity: 0.4 }} className="hidden sm:inline">•</span>

          <a
            href={`tel:${phoneRaw}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'rgba(248, 246, 240, 0.78)',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 240, 0.78)')}
          >
            <Phone size={16} color="var(--color-secondary)" />
            <span>Direct Kitchen: {phone}</span>
          </a>
        </div>
      </div>

      {/* Subtle indicator */}
      <a
        href="#services"
        aria-label="Scroll down to services"
        style={{
          position: 'absolute',
          bottom: 'var(--space-24)',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(248, 246, 240, 0.4)',
          transition: 'color var(--transition-fast)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 240, 0.4)')}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
