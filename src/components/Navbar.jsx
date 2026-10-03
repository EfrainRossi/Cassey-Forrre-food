import React, { useState, useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ onOrderClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: scrolled ? 'rgba(18, 18, 18, 0.95)' : 'rgba(18, 18, 18, 0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(212, 185, 150, 0.25)' : 'rgba(255, 255, 255, 0.1)'}`,
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Wordmark Logo */}
        <a
          href="#"
          onClick={(e) => {
            if (window.location.hash) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: 'var(--color-text-light)',
              lineHeight: 1.1,
            }}
          >
            {business.name}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: 'var(--color-secondary)',
              marginTop: '2px',
            }}
          >
            {business.area}, {business.city}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
          className="md:flex"
        >
          {business.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'rgba(248, 246, 240, 0.85)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 246, 240, 0.85)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Direct Phone */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-16)',
          }}
          className="md:flex"
        >
          <a
            href={`tel:${business.phoneRaw}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-secondary)',
              fontSize: '0.88rem',
              fontWeight: 500,
              paddingRight: 'var(--space-8)',
              transition: 'opacity var(--transition-fast)',
            }}
            title={`Call ${business.phone}`}
          >
            <Phone size={15} />
            <span>{business.phone}</span>
          </a>

          <Button
            variant="beige"
            onClick={onOrderClick}
            style={{
              padding: '10px 22px',
              fontSize: '0.88rem',
            }}
          >
            {business.cta.primary}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-light)',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-primary)',
            borderBottom: '1px solid rgba(212, 185, 150, 0.3)',
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.5)',
            padding: 'var(--space-32) var(--space-24)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-24)',
            zIndex: 899,
          }}
          className="md:hidden"
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-20)',
            }}
          >
            {business.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  color: 'var(--color-text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '12px',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-12)',
              marginTop: 'var(--space-8)',
            }}
          >
            <a
              href={`tel:${business.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-secondary)',
                fontSize: '0.98rem',
                fontWeight: 500,
                padding: '10px 0',
              }}
            >
              <Phone size={17} />
              <span>Call {business.phone}</span>
            </a>

            <Button
              variant="beige"
              onClick={() => {
                closeMenu();
                onOrderClick();
              }}
              style={{
                width: '100%',
                padding: '14px',
              }}
            >
              {business.cta.primary}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
