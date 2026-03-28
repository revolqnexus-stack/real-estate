'use client';

import TextReveal from '@/components/shared/TextReveal';

const TESTIMONIALS = [
  {
    quote: 'We had searched for two years. Landmark found us the right home in four conversations.',
    name: 'Riya & Anand Menon',
    property: 'The Rosewood, Kochi',
  },
  {
    quote: 'The transparency was unlike any other agency we had dealt with. Every detail was handled beautifully.',
    name: 'Dr. Priya Nambiar',
    property: 'Seaward Villas, Kovalam',
  },
  {
    quote: 'A truly bespoke experience. They understood exactly what we needed before we could articulate it.',
    name: 'Thomas & Sarah Mathew',
    property: 'Palliyil Manor, Thrissur',
  },
] as const;

/**
 * Three testimonials in a horizontal row with large quote marks.
 */
export default function TestimonialsSection() {
  return (
    <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32">
      <TextReveal>
        <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
          Client Stories
        </p>
      </TextReveal>

      <TextReveal delay={0.1}>
        <h2 className="t-heading mb-20">
          What our clients <em>say.</em>
        </h2>
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <TextReveal key={i} delay={0.15 + i * 0.1}>
            <div
              className="flex flex-col"
              style={{
                borderLeft: i > 0 ? '1px solid var(--line2)' : 'none',
                paddingLeft: i > 0 ? '2rem' : '0',
              }}
            >
              {/* Quote mark */}
              <span
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontStyle: 'italic',
                  fontSize: '4rem',
                  lineHeight: 0.5,
                  color: 'var(--dim)',
                  marginBottom: '1.5rem',
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontWeight: 300,
                  fontSize: '1.05rem',
                  lineHeight: 1.85,
                  color: 'var(--ink)',
                  maxWidth: '320px',
                }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="mt-6">
                <p
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'var(--muted)',
                  }}
                >
                  {t.name}
                </p>
                <p className="t-label mt-1" style={{ fontSize: '0.62rem', letterSpacing: '0.25em', color: 'var(--dim)' }}>
                  {t.property}
                </p>
              </div>
            </div>
          </TextReveal>
        ))}
      </div>
    </section>
  );
}
