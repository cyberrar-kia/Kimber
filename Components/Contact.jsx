'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with your form handler (Formspree, Netlify Forms, etc.)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 grain-overlay overflow-hidden"
      style={{ backgroundColor: '#1C1814' }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 80%, rgba(184,149,94,0.12) 0%, transparent 50%), radial-gradient(circle at 90% 20%, rgba(74,82,64,0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">

          {/* ── Left info column ──────────────────── */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-14">
            <div>
              <div className="reveal flex items-center gap-4 mb-5">
                <span className="section-label">Get in Touch</span>
                <div className="brass-divider" />
              </div>

              <h2
                className="reveal delay-100 font-serif font-light leading-tight mb-6"
                style={{
                  color: '#FAF7F2',
                  fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                Let's create something{' '}
                <em style={{ color: '#B8955E' }}>extraordinary</em>{' '}
                together.
              </h2>

              <p
                className="reveal delay-200 font-sans font-light leading-relaxed"
                style={{
                  color: 'rgba(250,247,242,0.55)',
                  fontSize: '0.95rem',
                  lineHeight: '1.85',
                }}
              >
                Whether you're in the early stages of planning a renovation or
                simply looking for colour advice, I'd love to hear from you.
                Every beautiful home begins with a conversation.
              </p>
            </div>

            {/* Contact details */}
            <div className="reveal delay-300 flex flex-col gap-6">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                      <path d="M2 4.5A2.5 2.5 0 014.5 2h.5a2 2 0 012 2v1a2 2 0 01-2 2h-.5A1.5 1.5 0 003 8.5C3 13.747 7.253 18 12.5 18a1.5 1.5 0 001.5-1.5v-.5a2 2 0 012-2h1a2 2 0 012 2v.5A2.5 2.5 0 0116.5 19C8.492 19 2 12.508 2 4.5z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'kimber@gradedinteriors.co.uk',
                  href: 'mailto:kimber@gradedinteriors.co.uk',
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                      <path d="M10 2C7.239 2 5 4.239 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.761-2.239-5-5-5z" stroke="currentColor" strokeWidth="1.25"/>
                      <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.25"/>
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Plymouth, Devon, UK',
                  href: null,
                },
                {
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.25"/>
                      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: 'Studio Hours',
                  value: 'Mon–Fri, 9am–5pm',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="mt-0.5 p-2.5 flex-shrink-0"
                    style={{ backgroundColor: 'rgba(184,149,94,0.12)', color: '#B8955E' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="font-sans uppercase mb-0.5"
                      style={{
                        color: 'rgba(250,247,242,0.35)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans transition-colors duration-300 hover:text-brass"
                        style={{ color: 'rgba(250,247,242,0.8)', fontSize: '0.9rem' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-sans"
                        style={{ color: 'rgba(250,247,242,0.8)', fontSize: '0.9rem' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram & socials */}
            <div className="reveal delay-400">
              <p
                className="font-sans uppercase mb-4"
                style={{
                  color: 'rgba(250,247,242,0.3)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                }}
              >
                Follow Along
              </p>
              <div className="flex gap-3">
                {[
                  {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/gradedinteriors',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/gradedinteriors',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 transition-all duration-300"
                    style={{
                      border: '1px solid rgba(184,149,94,0.25)',
                      color: 'rgba(250,247,242,0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#B8955E';
                      e.currentTarget.style.color = '#B8955E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(184,149,94,0.25)';
                      e.currentTarget.style.color = 'rgba(250,247,242,0.5)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — Form ─────────────────────── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="reveal h-full flex flex-col items-center justify-center text-center p-14"
                style={{ border: '1px solid rgba(184,149,94,0.2)' }}
              >
                <div
                  className="mb-6 p-4"
                  style={{ backgroundColor: 'rgba(184,149,94,0.1)', color: '#B8955E' }}
                >
                  <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-serif font-light mb-3"
                  style={{ color: '#FAF7F2', fontSize: '1.6rem' }}
                >
                  Message Received ✦
                </h3>
                <p
                  className="font-sans font-light"
                  style={{ color: 'rgba(250,247,242,0.55)', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '380px' }}
                >
                  Thank you for reaching out. Kimber will be in touch within 2 working
                  days to discuss your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="reveal delay-200 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-sans uppercase"
                      style={{
                        color: 'rgba(250,247,242,0.35)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-sans uppercase"
                      style={{
                        color: 'rgba(250,247,242,0.35)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-sans uppercase"
                      style={{
                        color: 'rgba(250,247,242,0.35)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+44 (0) ..."
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="projectType"
                      className="font-sans uppercase"
                      style={{
                        color: 'rgba(250,247,242,0.35)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                      }}
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formState.projectType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option value="full-design">Full Interior Design</option>
                      <option value="colour">Colour Consultation</option>
                      <option value="space-planning">Space Planning</option>
                      <option value="furniture-art">Furniture & Art Curation</option>
                      <option value="heritage">Heritage Property Restoration</option>
                      <option value="online">Online Consultation</option>
                      <option value="not-sure">Not sure yet — let's chat</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-sans uppercase"
                    style={{
                      color: 'rgba(250,247,242,0.35)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.2em',
                    }}
                  >
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your home, the spaces you'd like to transform, and what you're hoping to achieve…"
                    className="form-input resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2">
                  <p
                    className="font-sans font-light"
                    style={{
                      color: 'rgba(250,247,242,0.3)',
                      fontSize: '0.75rem',
                      lineHeight: '1.6',
                    }}
                  >
                    I'll respond within 2 working days.
                    <br />
                    Your details are never shared.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex-shrink-0"
                  >
                    {loading ? (
                      <>
                        <span>Sending…</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" className="animate-spin" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                          <path d="M8 2a6 6 0 016 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
