import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div
      className={`section-heading flex flex-col ${alignClass} ${className}`}
      style={{
        marginBottom: 'var(--space-48)',
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{
            color: light ? 'var(--color-secondary)' : 'var(--color-accent)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          color: light ? 'var(--color-text-light)' : 'var(--color-text-main)',
          maxWidth: align === 'center' ? '780px' : '680px',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 'var(--space-16)',
            color: light ? 'var(--color-text-light-muted)' : 'var(--color-text-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            maxWidth: '62ch',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
