'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative"
      style={{ backgroundColor: '#141210', borderTop: '1px solid rgba(184,149,94,0.12)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-14">

          {/* ── Brand ──────────────────────────────── */}
          <div className="flex flex-col gap-5">
            <div>
              <p
                className="font-serif text-xl font-semibold"
                style={{ color: '#FAF7F2', letterSpacing: '0.05em' }}
              >
                Graded Interiors
              </p>
              <p
                className="font-sans text-xs mt-0.5"
                style={{ color: '#B8955E', letterSpacing: '0.2em', fontSize: '0.6rem' }}
              >
                by Kimber ✦
              </p>
            </div>
            <p
              className="font-sans font-light leading-relaxed"
              style={{
                color: 'rgba(250,247,242,0.4)',
                fontSize: '0.85rem',
                lineHeight: '1.8',
                maxWidth: '260px',
              }}
            >
              Crafted and character-driven interiors — designing for heritage homes
              and individuals seeking a meaningful, soul connection with their spaces.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {[
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/gradedinteriors',
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
                      <circle cx="14" cy="6" r="0.8" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/gradedinteriors',
                  icon: (
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                      <path d="M15 2h-2.5A4.5 4.5 0 008 6.5V9H6v3h2v7h3v-7h2l.5-3H11V7a1 1 0 011-1h2V2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2.5 transition-all duration-300"
                  style={{
                    border: '1px solid rgba(184,149,94,0.2)',
                    color: 'rgba(250,247,242,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#B8955E';
                    e.currentTarget.style.borderColor = 'rgba(184,149,94,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(250,247,242,0.35)';
                    e.currentTarget.style.borderColor = 'rgba(184,149,94,0.2)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ────────────────────────── */}
          <div>
            <p
              className="font-sans uppercase mb-6"
              style={{
                color: 'rgba(250,247,242,0.3)',
                fontSize: '0.62rem',
                letterSpacing: '0.25em',
              }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.href)}
                  className="text-left font-sans transition-colors duration-300 hover:text-brass w-fit"
                  style={{
                    color: 'rgba(250,247,242,0.45)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#B8955E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.45)')}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Contact & Community ───────────────── */}
          <div>
            <p
              className="font-sans uppercase mb-6"
              style={{
                color: 'rgba(250,247,242,0.3)',
                fontSize: '0.62rem',
                letterSpacing: '0.25em',
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:kimber@gradedinteriors.co.uk"
                className="font-sans transition-colors duration-300"
                style={{ color: 'rgba(250,247,242,0.45)', fontSize: '0.85rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B8955E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.45)')}
              >
                kimber@gradedinteriors.co.uk
              </a>
              <p
                className="font-sans"
                style={{ color: 'rgba(250,247,242,0.35)', fontSize: '0.85rem' }}
              >
                Plymouth, Devon, UK
              </p>
              <p
                className="font-sans"
                style={{ color: 'rgba(250,247,242,0.35)', fontSize: '0.85rem' }}
              >
                Serving clients across the UK &amp; beyond
              </p>
            </div>

            <div
              className="pt-6"
              style={{ borderTop: '1px solid rgba(184,149,94,0.12)' }}
            >
              <p
                className="font-sans uppercase mb-3"
                style={{
                  color: 'rgba(250,247,242,0.25)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                }}
              >
                Heritage Community
              </p>
              <a
                href="https://www.instagram.com/thehousethatlorebuilt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic transition-colors duration-300"
                style={{ color: 'rgba(184,149,94,0.7)', fontSize: '0.9rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B8955E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(184,149,94,0.7)')}
              >
                The House That Lore Built ✦
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(184,149,94,0.1)' }}
        >
          <p
            className="font-sans text-center sm:text-left"
            style={{ color: 'rgba(250,247,242,0.2)', fontSize: '0.75rem', letterSpacing: '0.05em' }}
          >
            © {year} Graded Interiors. All rights reserved.
          </p>
          <p
            className="font-serif italic"
            style={{ color: 'rgba(184,149,94,0.35)', fontSize: '0.8rem' }}
          >
            Designed with soul. Built for heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
