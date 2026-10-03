import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const { faq } = business;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      className="section"
      style={{
        backgroundColor: 'var(--color-secondary-light)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
          align="center"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-24)',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-16)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 500,
                    color: 'var(--color-text-main)',
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ChevronDown size={20} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-24) var(--space-24) var(--space-24)',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid #F5EFE6',
                      paddingTop: 'var(--space-16)',
                    }}
                  >
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
