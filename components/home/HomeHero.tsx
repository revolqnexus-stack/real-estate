'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/shared/TextReveal';

const EASE = [0.21, 0.6, 0.35, 1] as const;

/**
 * Full-viewport asymmetrical hero mimicking Mersi Architecture.
 * 50/50 split screen with overlapping central brand bar.
 */
export default function HomeHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex flex-col md:flex-row"
      style={{ minHeight: '100vh', background: 'var(--cream)' }}
    >
      {/* Left Pane - Primary Image Sequence */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={isInView ? { scale: 1 } : undefined}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=3840&q=90"
            alt="Luxury Architecture"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
        </motion.div>
        
        {/* Soft dark gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Right Pane - Secondary Perspective */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden hidden md:block">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25 }}
          animate={isInView ? { scale: 1 } : undefined}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6d349c58?auto=format&fit=crop&w=3840&q=90"
            alt="Architecture Detail"
            fill
            className="object-cover grayscale brightness-75 contrast-125"
            priority
            sizes="50vw"
            quality={90}
          />
        </motion.div>
      </div>

      {/* Floating Central Information Bar */}
      <motion.div 
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 px-6 md:px-0 pointer-events-none"
        initial={{ opacity: 0, y: '-40%' }}
        animate={isInView ? { opacity: 1, y: '-50%' } : undefined}
        transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
      >
        <div 
          className="mx-auto flex flex-col items-center justify-center p-8 md:p-16 rounded-sm shadow-2xl"
          style={{ 
            backgroundColor: 'var(--cream)',
            maxWidth: '680px',
            border: '1px solid var(--line)',
            backdropFilter: 'blur(12px)'
          }}
        >
          <TextReveal delay={0.6}>
            <h1 className="t-display text-center mb-6 leading-none tracking-tighter" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
              LANDMARK<br />
              <span style={{ fontSize: '0.9em', color: 'var(--muted)', fontStyle: 'italic' }}>ESTATES</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.7} className="mt-4 flex flex-col items-center">
            <p className="t-label mb-2" style={{ letterSpacing: '0.45em', opacity: 0.6 }}>Kochi, Kerala</p>
            <div className="w-12 h-[1px] bg-ink/20 my-4" />
            <p className="t-label font-bold text-ink" style={{ letterSpacing: '0.3em' }}>PROPERTIES SHAPED BY TRUE STORIES</p>
          </TextReveal>
        </div>
      </motion.div>
    </section>
  );
}
