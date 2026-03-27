'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/shared/TextReveal';

const EASE = [0.25, 0, 0, 1] as const;

/**
 * Full-viewport hero with a textural background image
 * behind a cream overlay. Headline dominates.
 */
export default function HomeHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', padding: '32vh 0 6rem' }}
    >
      {/* Background image — barely visible, textural */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : undefined}
        transition={{ duration: 2, ease: EASE }}
      >
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Kerala property"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Cream overlay — keeps the luxury feel */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(245,240,235,0.65)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        <TextReveal delay={0}>
          <p className="t-label" style={{ letterSpacing: '0.45em', fontSize: '0.6rem' }}>
            Est. 2018 · Kochi, Kerala
          </p>
        </TextReveal>

        <TextReveal delay={0.1} className="mt-8">
          <h1 className="t-display">
            Properties shaped<br />
            <em>by true stories.</em>
          </h1>
        </TextReveal>

        <TextReveal delay={0.25} className="mt-8">
          <p
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--muted)',
            }}
          >
            12 exceptional properties across Kerala.
          </p>
        </TextReveal>
      </div>
    </section>
  );
}
