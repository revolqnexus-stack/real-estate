'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { type Property } from '@/types/property';

interface PropertyHeroProps {
  property: Property;
}

const EASE = [0.25, 0, 0, 1] as const;

/**
 * Full-bleed 75vh hero section for individual property pages.
 * Shows image with dark overlay, property details, and price.
 */
export default function PropertyHero({ property }: PropertyHeroProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: '75vh' }}>
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : undefined}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,8,6,0.25)' }} />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontWeight: 200,
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.7)',
              marginBottom: '0.75rem',
            }}
          >
            {property.type} · {property.status === 'coming-soon' ? 'coming soon' : property.status}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              lineHeight: 1,
              color: 'var(--cream)',
            }}
          >
            {property.title}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontWeight: 200,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.6)',
              marginTop: '0.75rem',
            }}
          >
            {property.location}, {property.district}
          </p>
        </motion.div>

        <motion.div
          className="text-right shrink-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
        >
          <p className="t-price" style={{ fontSize: '2rem' }}>
            {property.price}
          </p>
          {property.priceNote && (
            <p style={{ fontFamily: 'var(--font-serif), serif', fontSize: '0.75rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
              {property.priceNote}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
