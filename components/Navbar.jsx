'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'nav-scrolled'
            : 'bg-transparent'
        }`}
        style={{ backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ─────────────────────────────────── */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex flex-col items-start group"
              aria-label="Graded Interiors Home"
            >
              <span
                className="font-serif text-xl font-semibold tracking-wide leading-tight"
                style={{ color: '#FAF7F2', letterSpacing: '0.05em' }}
              >
                Graded Interiors
              </span>
              <span
                className="text-xs font-sans tracking-widest uppercase"
                style={{ color: '#B8955E', letterSpacing: '0.2em', fontSize: '0.6rem' }}
              >
                by Kimber ✦
              </span>
            </button>

            {/* ── Desktop Nav ──────────────────────────── */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-sans text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-brass'
                      : 'text-cream/70 hover:text-cream'
                  }`}
                  style={{
                    color:
                      activeSection === link.href.replace('#', '')
                        ? '#B8955E'
                        : undefined,
                    letterSpacing: '0.15em',
                    fontSize: '0.68rem',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* ── CTA + Hamburger ───────────────────────── */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden lg:inline-flex btn-primary"
              >
                <span>Book a Consultation</span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                aria-label="Toggle menu"
                style={{ color: '#FAF7F2' }}
              >
                <span
                  className="hamburger-line"
                  style={{
                    transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '',
                  }}
                />
                <span
                  className="hamburger-line"
                  style={{
                    opacity: menuOpen ? 0 : 1,
                    transform: menuOpen ? 'scaleX(0)' : '',
                  }}
                />
                <span
                  className="hamburger-line"
                  style={{
                    transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '',
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
          style={{
            maxHeight: menuOpen ? '500px' : '0',
            borderTop: menuOpen ? '1px solid rgba(184,149,94,0.2)' : 'none',
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-sans text-sm font-medium tracking-widest uppercase transition-colors duration-300 text-cream/70 hover:text-brass"
                style={{ letterSpacing: '0.15em', fontSize: '0.75rem', color: '#FAF7F2CC' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary mt-2 justify-center"
            >
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
