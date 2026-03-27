'use client';

import TextReveal from '@/components/shared/TextReveal';

const STATS = [
  { number: '12+', label: 'Properties Listed' },
  { number: '₹2Cr+', label: 'Average Property Value' },
  { number: '8+', label: 'Kerala Districts' },
  { number: '100%', label: 'Client Satisfaction' },
] as const;

/**
 * Horizontal stats bar with column dividers.
 */
export default function StatsBar() {
  return (
    <section
      className="px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4"
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      {STATS.map((stat, i) => (
        <TextReveal key={stat.label} delay={i * 0.08}>
          <div
            className="text-center py-4 md:py-0"
            style={{
              borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '2.8rem',
                color: 'var(--ink)',
                lineHeight: 1,
              }}
            >
              {stat.number}
            </p>
            <p className="t-label mt-3" style={{ fontSize: '0.62rem', letterSpacing: '0.3em' }}>
              {stat.label}
            </p>
          </div>
        </TextReveal>
      ))}
    </section>
  );
}
