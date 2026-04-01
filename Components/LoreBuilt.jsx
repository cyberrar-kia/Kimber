import Image from 'next/image';

export default function LoreBuilt() {
  return (
    <section
      id="lore"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Decorative side element */}
      <div
        className="absolute left-0 top-0 bottom-0 hidden xl:block"
        style={{ width: '4px', background: 'linear-gradient(to bottom, transparent, #B8955E, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: '#1C1814' }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/seed/heritage-building-stone/1400/700"
              alt="The House That Lore Built"
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            {/* Left — text */}
            <div className="p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
              <div className="reveal flex items-center gap-3 mb-6">
                <span
                  className="font-sans uppercase text-xs tracking-widest"
                  style={{ color: '#B8955E', letterSpacing: '0.25em', fontSize: '0.65rem' }}
                >
                  Heritage Community
                </span>
              </div>

              <h2
                className="reveal delay-100 font-serif font-light leading-tight mb-6"
                style={{
                  color: '#FAF7F2',
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                The House That{' '}
                <em style={{ color: '#B8955E' }}>Lore Built</em>
              </h2>

              <p
                className="reveal delay-200 font-sans font-light leading-relaxed mb-5"
                style={{
                  color: 'rgba(250,247,242,0.65)',
                  fontSize: '0.95rem',
                  lineHeight: '1.85',
                }}
              >
                A new heritage club at the intersection of decay, design, and
                discretion. Born from a deep frustration with the inconsistencies of
                the listed building system and the very real loss of heritage knowledge
                from retiring skilled tradespeople.
              </p>

              <p
                className="reveal delay-300 font-sans font-light leading-relaxed mb-8"
                style={{
                  color: 'rgba(250,247,242,0.65)',
                  fontSize: '0.95rem',
                  lineHeight: '1.85',
                }}
              >
                A space where heritage home owners, lovers, and restorers can connect
                without judgment — sharing stories and knowledge over drinks in
                Plymouth's beautiful historic buildings. With a free online subscriber
                option and in-person events across Ocean City, everyone is welcome.
              </p>

              {/* Features list */}
              <div className="reveal delay-300 grid grid-cols-2 gap-3 mb-10">
                {[
                  'In-person events in Plymouth',
                  'Free online membership',
                  'Heritage restoration knowledge',
                  'Traditional skills & materials',
                  'Community of like-minded folk',
                  'No judgment, all levels welcome',
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <div
                      className="mt-1.5 flex-shrink-0"
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#B8955E',
                      }}
                    />
                    <span
                      className="font-sans"
                      style={{
                        color: 'rgba(250,247,242,0.55)',
                        fontSize: '0.78rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="reveal delay-400 flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/thehousethatlorebuilt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/thehousethatlorebuilt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>

            {/* Right — visual / quote */}
            <div
              className="hidden lg:flex flex-col items-center justify-center p-12 xl:p-16"
              style={{ borderLeft: '1px solid rgba(184,149,94,0.15)' }}
            >
              <div
                className="reveal-right text-center"
              >
                <div
                  className="font-serif italic leading-none mb-2 select-none"
                  style={{ color: '#B8955E', fontSize: '7rem', opacity: 0.2 }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p
                  className="font-serif italic leading-relaxed mb-8"
                  style={{
                    color: 'rgba(250,247,242,0.65)',
                    fontSize: '1.15rem',
                    lineHeight: '1.85',
                    maxWidth: '340px',
                  }}
                >
                  Honouring the past, respecting and advocating for local, traditional
                  skills and materials — buying for longevity, sustainability, and
                  connection.
                </p>
                <p
                  className="font-sans font-medium"
                  style={{ color: '#B8955E', fontSize: '0.8rem', letterSpacing: '0.08em' }}
                >
                  — Kimber ✦
                </p>

                {/* Decorative diamond */}
                <div
                  className="mt-12 mx-auto"
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid rgba(184,149,94,0.25)',
                    transform: 'rotate(45deg)',
                  }}
                />
                <div
                  className="mt-2 text-center"
                  style={{
                    marginTop: '-28px',
                  }}
                >
                  <span
                    className="font-sans uppercase"
                    style={{
                      color: 'rgba(184,149,94,0.4)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                    }}
                  >
                    @thehousethatlorebuilt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
