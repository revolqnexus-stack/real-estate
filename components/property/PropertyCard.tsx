'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
  index?: number;
}

const EASE = [0.25, 0, 0, 1] as const;

const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  sold: { bg: 'var(--ink)', color: 'var(--cream)' },
  'coming-soon': { bg: 'var(--gold)', color: 'var(--ink)' },
  reserved: { bg: 'var(--warm2)', color: 'var(--ink)' },
  available: { bg: 'var(--cream)', color: 'var(--ink)' },
};

/**
 * Portrait property card with three animated layers:
 * 1. Image (scales + darkens on hover)
 * 2. Overlay (fades in)
 * 3. Info (slides up from bottom)
 *
 * The entire card links to the property detail page.
 */
export default function PropertyCard({ property, priority = false, index = 0 }: PropertyCardProps) {
  const statusStyle = STATUS_STYLES[property.status] || STATUS_STYLES.available;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.05 }}
    >
      <Link
        href={`/properties/${property.slug}`}
        className="group block relative overflow-hidden aspect-[3/4]"
        data-project-card
        style={{ background: 'var(--warm)' }}
      >
        {/* Layer 1 — Image */}
        <div className="absolute inset-0 transition-all duration-[650ms] ease-out group-hover:scale-[1.04] group-hover:brightness-[0.72]">
          <Image
            src={property.heroImage}
            alt={property.title}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Layer 2 — Overlay */}
        <div
          className="absolute inset-0 z-10 transition-colors duration-500"
          style={{ backgroundColor: 'rgba(10,8,6,0)' }}
        />
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: 'var(--overlay)' }}
        />

        {/* Status Badge */}
        <div
          className="absolute top-5 left-5 z-20 px-3 py-1.5"
          style={{
            background: statusStyle.bg,
            color: statusStyle.color,
            fontFamily: 'var(--font-sans), sans-serif',
            fontWeight: 200,
            fontSize: '0.58rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          {property.status === 'coming-soon' ? 'coming soon' : property.status}
        </div>

        {/* Layer 3 — Info (appears on hover) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex justify-between items-end opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-75">
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontWeight: 200,
                fontSize: '0.58rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,235,0.55)',
                marginBottom: '0.4rem',
              }}
            >
              {property.type} · {property.location}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
                lineHeight: 1.1,
                color: 'var(--cream)',
                marginBottom: '0.3rem',
              }}
            >
              {property.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontWeight: 200,
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                color: 'rgba(245,240,235,0.55)',
              }}
            >
              {property.district}
            </p>
          </div>

          <div className="text-right shrink-0">
            <p
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '1.2rem',
                color: 'var(--gold)',
              }}
            >
              {property.price}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontWeight: 200,
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'rgba(245,240,235,0.4)',
              }}
            >
              {property.area}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
