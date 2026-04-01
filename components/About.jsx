import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(184,149,94,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Image side ──────────────────────── */}
          <div className="reveal-left relative">
            {/* Decorative frame */}
            <div
              className="absolute -top-5 -left-5 w-full h-full"
              style={{ border: '1px solid rgba(184,149,94,0.25)', zIndex: 0 }}
            />

            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', zIndex: 1 }}>
              <Image
                src="https://picsum.photos/seed/heritage-room-warm/800/1000"
                alt="Kimber — founder of Graded Interiors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(28,24,20,0.3) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* Floating credential badge */}
            <div
              className="absolute -bottom-6 -right-6 lg:-right-10 p-6"
              style={{
                backgroundColor: '#1C1814',
                border: '1px solid rgba(184,149,94,0.3)',
                zIndex: 2,
                minWidth: '180px',
              }}
            >
              <p
                className="font-serif italic text-sm mb-1"
                style={{ color: '#B8955E', fontSize: '0.8rem' }}
              >
                Transitional Design
              </p>
              <p
                className="font-sans text-xs"
                style={{
                  color: 'rgba(250,247,242,0.6)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Heritage Specialist
              </p>
            </div>
          </div>

          {/* ── Text side ───────────────────────── */}
          <div className="flex flex-col gap-7">
            <div className="reveal delay-100">
              <span className="section-label">About Kimber</span>
              <div className="brass-divider mt-3" />
            </div>

            <h2
              className="reveal delay-200 font-serif font-light leading-tight"
              style={{
                color: '#1C1814',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '-0.01em',
              }}
            >
              A designer who believes{' '}
              <em style={{ color: '#B8955E' }}>history</em> is the most
              beautiful material of all.
            </h2>

            <p
              className="reveal delay-300 font-sans font-light leading-relaxed"
              style={{ color: '#3D3530', fontSize: '1rem', lineHeight: '1.85' }}
            >
              Hello, I'm Kimber — an interior designer based in Plymouth, Devon, with
              a deep passion for the romance of period properties and the stories they
              carry. My practice, Graded Interiors, is built on a philosophy that
              your home should feel unquestionably <em>you</em> — a sanctuary where
              the past and present coexist with grace.
            </p>

            <p
              className="reveal delay-400 font-sans font-light leading-relaxed"
              style={{ color: '#3D3530', fontSize: '1rem', lineHeight: '1.85' }}
            >
              Specialising in transitional design for heritage and period homes, I
              combine authentic materials — lime plaster, aged brass, natural linens —
              with considered contemporary choices to create spaces that feel both
              timeless and deeply personal. I work with clients across the UK and
              beyond, offering in-person consultations in Plymouth and online services
              for clients further afield.
            </p>

            <p
              className="reveal delay-500 font-serif italic"
              style={{ color: '#B8955E', fontSize: '1.1rem', lineHeight: '1.7' }}
            >
              "I wanted to create interiors rooted firmly in the romance of history —
              because that's all any of us really want, isn't it? To feel
              connected."
            </p>

            <p
              className="reveal delay-500 font-sans font-medium"
              style={{ color: '#B8955E', fontSize: '0.85rem', letterSpacing: '0.05em' }}
            >
              — Kimber ✦
            </p>

            {/* Stats row */}
            <div
              className="reveal delay-600 grid grid-cols-3 gap-6 pt-8 mt-2"
              style={{ borderTop: '1px solid rgba(184,149,94,0.2)' }}
            >
              {[
                { num: '10+', label: 'Years Experience' },
                { num: '60+', label: 'Projects Completed' },
                { num: '100%', label: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif font-light"
                    style={{ color: '#B8955E', fontSize: '2rem', lineHeight: 1 }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="font-sans text-xs mt-2 uppercase"
                    style={{
                      color: '#7B8A6E',
                      letterSpacing: '0.1em',
                      fontSize: '0.62rem',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal delay-600">
              <a href="#contact" className="btn-outline-dark mt-2 inline-flex">
                <span>Work With Kimber</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
