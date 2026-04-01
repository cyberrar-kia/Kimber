'use client';

import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote:
      "Working with Kimber was an absolute revelation. She understood my Victorian terrace better than I did — she listened to what the house was trying to tell us and helped me honour that. The result is a home I never want to leave. Her warmth, patience, and extraordinary eye for authentic materials is unmatched.",
    name: "Sarah M.",
    location: "Plymouth, Devon",
    project: "Victorian Terrace · Full Design",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "Kimber transformed our Georgian study into something truly magnificent. She sourced the most incredible pre-loved pieces, found the most perfect stripe fabric I've ever seen, and managed the whole project with complete professionalism. If you have a period property and want it to feel genuinely loved — call Kimber.",
    name: "James & Eleanor T.",
    location: "Bath, Somerset",
    project: "Georgian Property · Space Planning & Curation",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "I've been trying to get my Edwardian living room right for years and just couldn't find the confidence to commit to decisions. One consultation with Kimber and everything clicked. Her colour knowledge is extraordinary — she introduced me to paints I'd never heard of and now I have a room that literally makes me gasp every time I walk in.",
    name: "Rachel B.",
    location: "Exeter, Devon",
    project: "Edwardian Home · Colour Consultation",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "The online consultation service is incredible value. Kimber sent through a detailed mood board with sample recommendations and a proper floor plan. She understood the proportions of my home from photos alone and gave me the confidence to make changes I'd been putting off for two years. Life-changing, honestly.",
    name: "Anna W.",
    location: "Bristol, Avon",
    project: "Period Flat · Online Consultation",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#B8955E">
          <path d="M7 1l1.65 3.34 3.69.54-2.67 2.6.63 3.67L7 9.34l-3.3 1.81.63-3.67-2.67-2.6 3.69-.54L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      id="testimonials"
      className="relative py-28 lg:py-36 grain-overlay overflow-hidden"
      style={{ backgroundColor: '#2D2720' }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(184,149,94,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ──────────────────────────────── */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center gap-4 justify-center mb-5">
            <div className="brass-divider" />
            <span className="section-label">Client Stories</span>
            <div className="brass-divider" />
          </div>
          <h2
            className="reveal delay-100 font-serif font-light leading-tight"
            style={{
              color: '#FAF7F2',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              letterSpacing: '-0.01em',
            }}
          >
            What my clients{' '}
            <em style={{ color: '#B8955E' }}>say</em>
          </h2>
        </div>

        {/* ── Slider ──────────────────────────────── */}
        <div
          className="reveal relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards track */}
          <div className="overflow-hidden">
            <div
              className="slider-track flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="w-full flex-shrink-0 px-4 lg:px-20"
                >
                  <div
                    className="max-w-3xl mx-auto p-10 lg:p-14"
                    style={{
                      backgroundColor: 'rgba(28,24,20,0.5)',
                      border: '1px solid rgba(184,149,94,0.2)',
                    }}
                  >
                    {/* Opening quote mark */}
                    <div
                      className="font-serif italic leading-none mb-4 select-none"
                      style={{ color: '#B8955E', fontSize: '5rem', opacity: 0.25, lineHeight: '0.5' }}
                      aria-hidden="true"
                    >
                      "
                    </div>

                    <p
                      className="font-serif font-light leading-relaxed mb-8"
                      style={{
                        color: 'rgba(250,247,242,0.85)',
                        fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                        lineHeight: '1.85',
                        fontStyle: 'italic',
                      }}
                    >
                      {t.quote}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="mb-2">
                          <StarRating count={t.stars} />
                        </div>
                        <p
                          className="font-sans font-semibold"
                          style={{ color: '#FAF7F2', fontSize: '0.9rem', letterSpacing: '0.05em' }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="font-sans"
                          style={{ color: 'rgba(250,247,242,0.4)', fontSize: '0.75rem', letterSpacing: '0.08em' }}
                        >
                          {t.location}
                        </p>
                      </div>
                      <div
                        className="px-4 py-2 text-right"
                        style={{ borderLeft: '1px solid rgba(184,149,94,0.25)' }}
                      >
                        <p
                          className="font-sans"
                          style={{ color: '#B8955E', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                        >
                          {t.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls ──────────────────────────── */}
          <div className="flex items-center justify-center gap-8 mt-10">
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group w-12 h-12 flex items-center justify-center transition-all duration-300"
              style={{
                border: '1px solid rgba(184,149,94,0.3)',
                color: 'rgba(250,247,242,0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B8955E';
                e.currentTarget.style.color = '#B8955E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(184,149,94,0.3)';
                e.currentTarget.style.color = 'rgba(250,247,242,0.5)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="transition-all duration-400"
                  style={{
                    width: current === i ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: current === i ? '#B8955E' : 'rgba(184,149,94,0.25)',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group w-12 h-12 flex items-center justify-center transition-all duration-300"
              style={{
                border: '1px solid rgba(184,149,94,0.3)',
                color: 'rgba(250,247,242,0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B8955E';
                e.currentTarget.style.color = '#B8955E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(184,149,94,0.3)';
                e.currentTarget.style.color = 'rgba(250,247,242,0.5)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
