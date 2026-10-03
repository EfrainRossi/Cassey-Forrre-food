import React from 'react';

export default function ServiceCard({ service, onOrderClick }) {
  const { title, description, image, badge } = service;

  return (
    <article
      className="service-card group"
      style={{
        backgroundColor: 'var(--color-card-bg)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-rest)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
        e.currentTarget.style.borderColor = 'var(--color-secondary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-rest)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      <div
        className="service-image-wrapper"
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#201e1b',
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 400ms ease',
          }}
          className="group-hover:scale-105"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)',
            pointerEvents: 'none',
          }}
        />
        {badge && (
          <span
            style={{
              position: 'absolute',
              top: 'var(--space-16)',
              right: 'var(--space-16)',
              backgroundColor: 'rgba(18, 18, 18, 0.75)',
              backdropFilter: 'blur(4px)',
              color: 'var(--color-secondary)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(212, 185, 150, 0.3)',
            }}
          >
            {badge}
          </span>
        )}
      </div>

      <div
        style={{
          padding: 'var(--space-24)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              marginBottom: 'var(--space-8)',
              color: 'var(--color-text-main)',
              fontSize: '1.25rem',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--color-text-muted)',
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            marginTop: 'var(--space-24)',
            paddingTop: 'var(--space-16)',
            borderTop: '1px solid #F0EAE1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontSize: '0.82rem',
              color: 'var(--color-accent)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            Prepared Fresh
          </span>
          <button
            type="button"
            onClick={() => onOrderClick && onOrderClick(title)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
          >
            Order
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
