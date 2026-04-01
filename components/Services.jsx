const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="8" width="30" height="24" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 14h30M15 8v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="11" r="1" fill="currentColor"/>
        <circle cx="10" cy="20" r="1" fill="currentColor"/>
        <circle cx="10" cy="26" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Full Interior Design',
    description:
      'A complete, end-to-end design service from initial concept through to final styling. I manage every detail — space planning, material selection, furniture sourcing, and installation oversight — to deliver a cohesive, considered result.',
    tag: 'Most Popular',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 7v4M20 29v4M7 20h4M29 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Colour Consultation',
    description:
      'Demystifying colour for your home. Using sample books from Mylands, Farrow & Ball, Little Greene, Fired Earth and more, I guide you to the perfect palette that works with your light, proportions, and personal aesthetic.',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="28" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 16h28M16 6v28M6 26h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Space Planning',
    description:
      'Making the most of your existing rooms through thoughtful spatial arrangement. I create detailed floor plans and 3D visualisations so you can see the transformation before a single piece of furniture is moved.',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 30l8-10 6 6 5-7 5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="6" width="28" height="24" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 34h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Furniture & Art Curation',
    description:
      'Sourcing beautiful, authentic pieces that bring soul to a room. From pre-loved antiques to commissioned artwork, I curate furniture and art that tells a story, blending old and new with considered intentionality.',
    tag: null,
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 34V18l10-12 10 12v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="16" y="24" width="8" height="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 18h26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Heritage Property Restoration',
    description:
      'Specialist advice for listed buildings and period properties. Navigating the nuances of appropriate materials, traditional skills, and sensitive restoration that honours the original fabric of your home.',
    tag: 'Specialist Service',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 30v4M26 30v4M10 34h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 15h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Online Consultations',
    description:
      'Full design expertise delivered wherever you are in the UK and beyond. Via video call with digital mood boards, materials guides, and floor plans, distance is no barrier to a beautifully considered home.',
    tag: null,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 lg:py-36 grain-overlay"
      style={{ backgroundColor: '#1C1814' }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(184,149,94,0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ─────────────────────── */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-4 mb-5">
            <span className="section-label">What I Offer</span>
            <div className="brass-divider" />
          </div>
          <h2
            className="reveal delay-100 font-serif font-light leading-tight mb-6"
            style={{
              color: '#FAF7F2',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Services designed to{' '}
            <em style={{ color: '#B8955E' }}>transform</em> your home.
          </h2>
          <p
            className="reveal delay-200 font-sans font-light"
            style={{
              color: 'rgba(250,247,242,0.55)',
              fontSize: '0.95rem',
              lineHeight: '1.8',
              letterSpacing: '0.01em',
            }}
          >
            Whether you need a colour consultation or a complete interior transformation,
            every service is delivered with Graded Interiors' signature warmth, depth,
            and meticulous attention to the materials that make a house a home.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal service-card delay-${Math.min((i + 1) * 100, 600)} relative flex flex-col p-8 lg:p-10 group cursor-default`}
              style={{
                backgroundColor: '#2D2720',
                border: '1px solid rgba(184,149,94,0.12)',
              }}
            >
              {/* Tag badge */}
              {service.tag && (
                <div
                  className="absolute top-6 right-6 px-2 py-1"
                  style={{
                    backgroundColor: 'rgba(184,149,94,0.15)',
                    border: '1px solid rgba(184,149,94,0.3)',
                  }}
                >
                  <span
                    className="font-sans uppercase"
                    style={{
                      color: '#B8955E',
                      fontSize: '0.55rem',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="mb-7 w-10 h-10 transition-colors duration-300 group-hover:text-brass"
                style={{ color: '#B8955E' }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-serif font-medium mb-4 transition-colors duration-300 group-hover:text-brass"
                style={{
                  color: '#FAF7F2',
                  fontSize: '1.25rem',
                  lineHeight: '1.3',
                  letterSpacing: '0.01em',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="font-sans font-light leading-relaxed flex-1"
                style={{
                  color: 'rgba(250,247,242,0.5)',
                  fontSize: '0.875rem',
                  lineHeight: '1.8',
                }}
              >
                {service.description}
              </p>

              {/* Hover line */}
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: 'rgba(184,149,94,0.4)' }}
              />
            </div>
          ))}
        </div>

        {/* ── CTA ────────────────────────────────── */}
        <div className="reveal mt-16 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <p
            className="font-serif italic"
            style={{ color: 'rgba(250,247,242,0.45)', fontSize: '1rem' }}
          >
            Not sure which service is right for you?
          </p>
          <a href="#contact" className="btn-primary">
            <span>Let's Have a Chat</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
