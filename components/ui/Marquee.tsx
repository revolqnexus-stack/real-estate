'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ITEMS = [
  'Available Now',
  'Kochi',
  'Calicut',
  'Thrissur',
  'Munnar',
  'Alleppey',
  'Wayanad',
  'Kovalam',
  'Fort Kochi',
];

const SEPARATOR = ' · ';
const TEXT = ITEMS.join(SEPARATOR) + SEPARATOR;

/**
 * Infinitely scrolling horizontal text strip.
 * Pauses on hover via CSS. Uses duplicate tracks for seamlessness.
 */
export default function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden py-5"
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--warm)',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex hover:[&>div]:pause"
        style={{ ['--marquee-speed' as string]: '40s' }}
      >
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex shrink-0 animate-marquee whitespace-nowrap"
            style={{
              animation: `marquee var(--marquee-speed, 40s) linear infinite`,
              fontFamily: 'var(--font-serif), serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: 'var(--muted)',
              letterSpacing: '0.1em',
            }}
          >
            <span className="px-4">{TEXT}</span>
            <span className="px-4">{TEXT}</span>
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee:hover,
        div:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
