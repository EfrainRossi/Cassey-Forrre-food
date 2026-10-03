import React, { useState } from 'react';
import { business } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import { MapPin, Phone, Mail, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact() {
  const { contact, whatsapp, mapsUrl, phoneRaw, email } = business;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Freshly Prepared Meals',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend inquiry submission simulation
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="section"
      style={{
        backgroundColor: 'var(--color-secondary-subtle)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.subtitle}
          align="left"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-24)',
            }}
          >
            {contact.cards.map((card, idx) => {
              let Icon = MapPin;
              if (card.type === 'phone') Icon = Phone;
              if (card.type === 'email') Icon = Mail;

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-card-bg)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-24)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-rest)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-secondary-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-accent)',
                          fontWeight: 600,
                        }}
                      >
                        {card.label}
                      </span>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '1rem',
                          fontWeight: 500,
                          color: 'var(--color-text-main)',
                        }}
                      >
                        {card.value}
                      </p>
                    </div>
                  </div>

                  <div style={{ paddingTop: 'var(--space-8)' }}>
                    <a
                      href={card.actionHref}
                      target={card.type === 'map' ? '_blank' : undefined}
                      rel={card.type === 'map' ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    >
                      {card.actionText}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Optional WhatsApp button: ONLY rendered if a WhatsApp number is provided in business.js */}
            {whatsapp && (
              <div
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-24)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 600,
                    color: '#25D366',
                  }}
                >
                  Chat on WhatsApp →
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Styled, Usable Contact & Order Form */}
          <div
            style={{
              backgroundColor: 'var(--color-card-bg)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-32)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-rest)',
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-text-main)',
              }}
            >
              {contact.form.heading}
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-24)',
              }}
            >
              {contact.form.subheading}
            </p>

            {formSubmitted ? (
              <div
                style={{
                  backgroundColor: 'var(--color-secondary-light)',
                  padding: 'var(--space-24)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-16)',
                }}
              >
                <CheckCircle2 size={24} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-main)', marginBottom: 'var(--space-4)' }}>
                    Inquiry Received
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                    {contact.form.successMessage}
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Freshly Prepared Meals',
                        message: '',
                      });
                    }}
                    style={{
                      marginTop: 'var(--space-16)',
                      padding: '8px 16px',
                      fontSize: '0.85rem',
                    }}
                  >
                    Send another inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'var(--color-text-main)',
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contact.form.namePlaceholder}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--color-secondary-subtle)',
                      outline: 'none',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-16)' }}>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '6px',
                        color: 'var(--color-text-main)',
                      }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={contact.form.phonePlaceholder}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'var(--color-secondary-subtle)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '6px',
                        color: 'var(--color-text-main)',
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contact.form.emailPlaceholder}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-body)',
                        backgroundColor: 'var(--color-secondary-subtle)',
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'var(--color-text-main)',
                    }}
                  >
                    Dining Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--color-secondary-subtle)',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Fresh Food Preparation">Fresh Food Preparation</option>
                    <option value="Breakfast Service">Breakfast Service</option>
                    <option value="Lunch Service">Lunch Service</option>
                    <option value="Dinner Service">Dinner Service</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Homemade Food">Homemade Food</option>
                    <option value="Freshly Prepared Meals">Freshly Prepared Meals</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'var(--color-text-main)',
                    }}
                  >
                    Order Details / Notes *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contact.form.messagePlaceholder}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--color-secondary-subtle)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color var(--transition-fast)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    marginTop: 'var(--space-8)',
                  }}
                >
                  {contact.form.submitButton}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
