import React from 'react';
import { business } from '../config/business.js';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { footer, name, navigation, phoneRaw, mapsUrl } = business;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        color: 'var(--color-text-light)',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
        borderTop: '1px solid rgba(212, 185, 150, 0.2)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-64)',
          }}
        >
          {/* Brand Col */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                color: 'var(--color-text-light)',
                display: 'block',
                marginBottom: 'var(--space-12)',
              }}
            >
              {name}
            </span>
            <p
              style={{
                color: 'var(--color-text-light-muted)',
                fontSize: '0.94rem',
                lineHeight: 1.6,
                marginBottom: 'var(--space-16)',
                maxWidth: '38ch',
              }}
            >
              {footer.tagline}
            </p>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-secondary)',
                fontWeight: 600,
              }}
            >
              Fenton • Stoke-on-Trent
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-16)',
                fontWeight: 600,
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      color: 'var(--color-text-light-muted)',
                      fontSize: '0.94rem',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light-muted)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                marginBottom: 'var(--space-16)',
                fontWeight: 600,
              }}
            >
              Contact & Location
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontSize: '0.92rem',
                color: 'var(--color-text-light-muted)',
              }}
            >
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: 'inherit',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
              >
                <MapPin size={17} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{footer.locationText}</span>
              </a>

              <a
                href={`tel:${phoneRaw}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'inherit',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
              >
                <Phone size={17} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                <span>{footer.phoneText}</span>
              </a>

              <a
                href={`mailto:${footer.emailText}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'inherit',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
              >
                <Mail size={17} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                <span>{footer.emailText}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-24)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-16)',
            fontSize: '0.85rem',
            color: 'var(--color-text-light-muted)',
          }}
        >
          <span>{footer.copyrightNotice}</span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-secondary)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
