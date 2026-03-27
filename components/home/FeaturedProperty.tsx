'use client';

import Link from 'next/link';
import ImageReveal from '@/components/shared/ImageReveal';
import TextReveal from '@/components/shared/TextReveal';
import { type Property } from '@/types/property';

interface FeaturedPropertyProps {
  property: Property;
}

/**
 * Full-width featured property showcase.
 * Two-column layout: image (55%) + details (45%).
 */
export default function FeaturedProperty({ property }: FeaturedPropertyProps) {
  const specs = [
    property.area,
    property.bedrooms ? `${property.bedrooms} BHK` : null,
    property.facing ? `${property.facing} Facing` : null,
  ].filter(Boolean).join(' · ');

  return (
    <section className="px-6 md:px-12 py-24">
      <TextReveal>
        <p className="t-label mb-12" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
          Featured Property
        </p>
      </TextReveal>

      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
        {/* Image */}
        <ImageReveal
          src={property.heroImage}
          alt={property.title}
          aspectRatio="aspect-[4/3]"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />

        {/* Details */}
        <div>
          <TextReveal>
            <p className="t-label" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--dim)' }}>
              {property.type.toUpperCase()} · {property.location.toUpperCase()}
            </p>
          </TextReveal>

          <TextReveal delay={0.1}>
            <h3
              className="mt-3"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}
            >
              {property.title}
            </h3>
          </TextReveal>

          <TextReveal delay={0.15}>
            <p
              className="mt-4"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.85,
                color: 'var(--muted)',
                maxWidth: '380px',
              }}
            >
              {property.shortDescription}
            </p>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p
              className="mt-8"
              style={{
                fontFamily: 'var(--font-sans), sans-serif',
                fontWeight: 200,
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                color: 'var(--muted)',
              }}
            >
              {specs}
            </p>
          </TextReveal>

          <TextReveal delay={0.25}>
            <div className="mt-8">
              <p className="t-price" style={{ fontSize: '2rem' }}>
                {property.price}
              </p>
              {property.priceNote && (
                <p style={{ fontFamily: 'var(--font-serif), serif', fontSize: '0.75rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
                  {property.priceNote}
                </p>
              )}
            </div>
          </TextReveal>

          <TextReveal delay={0.3}>
            <Link
              href={`/properties/${property.slug}`}
              className="inline-block mt-8 group"
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '0.9rem',
                color: 'var(--muted)',
              }}
            >
              View Property{' '}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
