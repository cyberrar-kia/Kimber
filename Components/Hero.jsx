import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '640px' }}
    >
      {/* ── Background Image ──────────────────────── */}
      <div className="absolute inset-0 hero-bg-animate">
        <Image
          src="https://picsum.photos/seed/heritage-interior-living/1800/1200"
          alt="Beautiful heritage interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }}
        />
        {/* Layered overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(28,24,20,0.75) 0%, rgba(28,24,20,0.45) 50%, rgba(28,24,20,0.65) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(28,24,20,0.85) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* ── Decorative Elements ───────────────────── */}
      <div
        className="absolute top-32 right-20 hidden xl:block"
        style={{
          width: '1px',
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, rgba(184,149,94,0.5), transparent)',
          animation: 'heroFadeUp 1s ease 2s both',
        }}
      />
      <div
        className="absolute bottom-40 left-16 hidden xl:block"
        style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(184,149,94,0.5), transparent)',
          animation: 'heroFadeUp 1s ease 2.2s both',
        }}
      />

      {/* ── Content ───────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">

            {/* Label */}
            <div className="hero-animate-1 flex items-center gap-4 mb-6">
              <span className="section-label" style={{ color: '#B8955E' }}>
                Heritage Interior Design
              </span>
              <span
                className="block"
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'rgba(184,149,94,0.6)',
                }}
              />
              <span className="section-label" style={{ color: '#B8955E' }}>
                Plymouth, UK
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-animate-2 font-serif font-light leading-none mb-6"
              style={{
                color: '#FAF7F2',
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Spaces that carry{' '}
              <em
                className="font-medium"
                style={{ color: '#C9A97A' }}
              >
                memory
              </em>
              ,<br />
              character &amp; soul.
            </h1>

            {/* Subheadline */}
            <p
              className="hero-animate-3 font-sans font-light mb-10 max-w-xl"
              style={{
                color: 'rgba(250,247,242,0.72)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                lineHeight: '1.75',
                letterSpacing: '0.02em',
              }}
            >
              Crafted and character-driven interiors — designing for heritage homes
              and individuals seeking a meaningful, soul connection with their spaces
              through history, depth, and authentic materials.
            </p>

            {/* CTAs */}
            <div className="hero-animate-4 flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary">
                <span>View My Work</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Book a Consultation</span>
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="hero-animate-5 flex flex-wrap gap-8 mt-12 pt-10"
              style={{ borderTop: '1px solid rgba(184,149,94,0.2)' }}
            >
              {[
                { num: '10+', label: 'Years of Experience' },
                { num: '60+', label: 'Heritage Projects' },
                { num: 'UK', label: 'Wide Service Area' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-serif font-light"
                    style={{ color: '#C9A97A', fontSize: '1.6rem', lineHeight: 1 }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="font-sans text-xs mt-1"
                    style={{
                      color: 'rgba(250,247,242,0.5)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontSize: '0.65rem',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-animate-5"
        style={{ color: 'rgba(250,247,242,0.4)' }}
        aria-hidden="true"
      >
        <span
          className="font-sans uppercase"
          style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(184,149,94,0.6), transparent)',
            animation: 'heroFadeUp 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
