'use client';

import Link from 'next/link';
import Image from 'next/image';
import TextReveal from '@/components/shared/TextReveal';
import { COLLECTIONS } from '@/lib/collections';

/**
 * Collection preview cards — 4 across with hover overlay text.
 */
export default function CollectionsPreview() {
  return (
    <section className="px-6 md:px-[10vw] lg:px-[15vw] py-32">
      <TextReveal>
        <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
          Collections
        </p>
      </TextReveal>

      <TextReveal delay={0.1}>
        <h2 className="t-heading mb-16">
          Curated by lifestyle, <em>not just location.</em>
        </h2>
      </TextReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COLLECTIONS.map((collection, i) => (
          <TextReveal key={collection.slug} delay={0.15 + i * 0.08}>
            <Link
              href={`/collections/${collection.slug}`}
              className="group block relative overflow-hidden aspect-[2/3]"
              style={{ background: 'var(--warm)' }}
              data-project-card
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Overlay — always slightly dark, darker on hover */}
              <div
                className="absolute inset-0 z-10 transition-all duration-500"
                style={{ backgroundColor: 'rgba(10,8,6,0.25)' }}
              />
              <div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: 'rgba(10,8,6,0.2)' }}
              />

              {/* Text — always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <h3
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1.4rem',
                    color: 'var(--cream)',
                    lineHeight: 1.2,
                  }}
                >
                  {collection.title}
                </h3>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontWeight: 200,
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,235,0.4)',
                  }}
                >
                  {collection.count} Properties
                </p>
              </div>
            </Link>
          </TextReveal>
        ))}
      </div>
    </section>
  );
}
