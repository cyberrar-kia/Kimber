const projects = [
  {
    id: 1,
    title: "Sergeants Quarters",
    subtitle: "Heritage Restoration · Plymouth",
    seed: "heritage-living-room-warm/800/600",
    tall: true,
  },
  {
    id: 2,
    title: "Edwardian Drawing Room",
    subtitle: "Transitional Design · Devon",
    seed: "vintage-interior-elegant/600/700",
    tall: false,
  },
  {
    id: 3,
    title: "Renaissance Red Room",
    subtitle: "Colour & Furnishing · Cornwall",
    seed: "red-interior-heritage/600/400",
    tall: false,
  },
  {
    id: 4,
    title: "Georgian Study",
    subtitle: "Space Planning & Art Curation",
    seed: "library-study-elegant/800/1000",
    tall: true,
  },
  {
    id: 5,
    title: "Victorian Hallway",
    subtitle: "Heritage Restoration · Bristol",
    seed: "hallway-traditional/600/700",
    tall: false,
  },
  {
    id: 6,
    title: "Period Kitchen",
    subtitle: "Full Design · Wiltshire",
    seed: "kitchen-heritage-warm/600/400",
    tall: false,
  },
];

const imageSeeds = [
  '10', '20', '30', '40', '50', '60',
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: '#F5EFE6' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ──────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="reveal flex items-center gap-4 mb-5">
              <span className="section-label">Portfolio</span>
              <div className="brass-divider" />
            </div>
            <h2
              className="reveal delay-100 font-serif font-light leading-tight"
              style={{
                color: '#1C1814',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                letterSpacing: '-0.01em',
              }}
            >
              Recent{' '}
              <em style={{ color: '#B8955E' }}>Projects</em>
            </h2>
          </div>
          <p
            className="reveal delay-200 font-sans font-light max-w-sm"
            style={{ color: '#5A4E44', fontSize: '0.9rem', lineHeight: '1.8' }}
          >
            Each project is a unique collaboration — a home transformed into a place
            that feels deeply personal and authentically lived-in.
          </p>
        </div>

        {/* ── Masonry Grid ──────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal portfolio-item relative overflow-hidden cursor-pointer delay-${Math.min((i + 1) * 100, 600)} ${
                project.tall ? 'sm:row-span-2' : ''
              }`}
              style={{
                aspectRatio: project.tall ? undefined : '4/3',
                minHeight: project.tall ? '480px' : undefined,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${imageSeeds[i]}interiors/800/${project.tall ? '1000' : '600'}`}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Base tint */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{ background: 'rgba(28,24,20,0.15)' }}
              />

              {/* Hover overlay */}
              <div
                className="overlay absolute inset-0 flex flex-col justify-end p-7"
                style={{
                  background:
                    'linear-gradient(to top, rgba(28,24,20,0.9) 0%, rgba(28,24,20,0.5) 50%, rgba(28,24,20,0.15) 100%)',
                }}
              >
                <div
                  className="mb-2 w-8 h-px"
                  style={{ backgroundColor: '#B8955E' }}
                />
                <h3
                  className="font-serif font-medium"
                  style={{ color: '#FAF7F2', fontSize: '1.2rem', letterSpacing: '0.01em' }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-sans mt-1"
                  style={{ color: 'rgba(250,247,242,0.6)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Project number */}
              <div
                className="absolute top-5 right-5 font-serif italic"
                style={{ color: 'rgba(250,247,242,0.25)', fontSize: '0.9rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ────────────────────────────────── */}
        <div className="reveal mt-14 text-center">
          <a href="#contact" className="btn-outline-dark">
            <span>Discuss Your Project</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
