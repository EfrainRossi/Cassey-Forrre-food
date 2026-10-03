import React, { useEffect } from 'react';
import { business } from '../config/business.js';
import Button from './ui/Button.jsx';
import { X, Phone, MapPin, Clock, Utensils } from 'lucide-react';

export default function OrderModal({ isOpen, onClose, preselectedService }) {
  const { orderModal, phoneRaw, phone, mapsUrl, fullAddress } = business;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: 'var(--space-24)',
            right: 'var(--space-24)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px',
          }}
        >
          <X size={22} />
        </button>

        {/* Modal Header */}
        <span className="eyebrow" style={{ marginBottom: '8px' }}>
          Takeaway & Dining
        </span>
        <h3
          style={{
            fontSize: '1.45rem',
            color: 'var(--color-text-main)',
            marginBottom: 'var(--space-8)',
          }}
        >
          {orderModal.title}
        </h3>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-24)',
          }}
        >
          {preselectedService ? `Requesting: ${preselectedService}. ` : ''}
          {orderModal.subtitle}
        </p>

        {/* Fastest Option: Direct Phone Order */}
        <div
          style={{
            backgroundColor: 'var(--color-secondary-light)',
            padding: 'var(--space-20)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
            marginBottom: 'var(--space-24)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Phone size={18} color="var(--color-accent)" />
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
              Call Our Kitchen Directly
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-12)' }}>
            For the fastest preparation and order confirmation, speak with our team:
          </p>
          <a
            href={`tel:${phoneRaw}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text-light)',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '1rem',
              textAlign: 'center',
              transition: 'background-color var(--transition-fast)',
            }}
          >
            <Phone size={18} />
            <span>Call {phone}</span>
          </a>
        </div>

        {/* Location & Pick-up Info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-12)',
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-24)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <MapPin size={17} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              <strong>Pick-up Address:</strong> {fullAddress}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={17} color="var(--color-accent)" style={{ flexShrink: 0 }} />
            <span>Freshly made to order for collection</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 'var(--space-12)' }}>
          <Button
            as="a"
            href="#contact"
            variant="secondary"
            onClick={onClose}
            style={{ flex: 1, padding: '12px' }}
          >
            Order Form Below
          </Button>

          <Button
            as="a"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="beige"
            onClick={onClose}
            style={{ flex: 1, padding: '12px' }}
          >
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
