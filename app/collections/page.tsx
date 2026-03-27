import Link from 'next/link';
import Image from 'next/image';
import TextReveal from '@/components/shared/TextReveal';
import { COLLECTIONS } from '@/lib/collections';

export const metadata = {
  title: 'Collections',
  description: 'Curated property collections by lifestyle — villas, apartments, heritage homes, and commercial spaces across Kerala.',
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12" style={{ paddingTop: '20vh', paddingBottom: '5rem' }}>
        <TextReveal>
          <p className="t-label mb-4" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
            Collections
          </p>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="t-heading">
            Properties curated <em>by the way you live.</em>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="t-body mt-6" style={{ maxWidth: '480px' }}>
            Each collection brings together properties that share a common character — a lifestyle, a landscape, a story.
          </p>
        </TextReveal>
      </section>

      {/* Collection Cards */}
      <section className="px-6 md:px-12 pb-24 flex flex-col gap-6">
        {COLLECTIONS.map((collection, i) => (
          <TextReveal key={collection.slug} delay={0.1 + i * 0.08}>
            <Link
              href={`/collections/${collection.slug}`}
              className="group block relative overflow-hidden"
              style={{ aspectRatio: '21/9', background: 'var(--warm)' }}
              data-project-card
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 z-10 transition-all duration-500"
                style={{ backgroundColor: 'rgba(10,8,6,0.30)' }}
              />
              <div
                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: 'rgba(10,8,6,0.15)' }}
              />

              {/* Text */}
              <div className="absolute bottom-0 left-0 z-20 p-8 md:p-12">
                <h2
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4vw, 4rem)',
                    color: 'var(--cream)',
                    lineHeight: 1.1,
                  }}
                >
                  {collection.title}
                </h2>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: 'var(--font-serif), serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1rem',
                    color: 'rgba(245,240,235,0.6)',
                  }}
                >
                  {collection.subtitle}
                </p>
                <p className="t-label mt-3" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'rgba(245,240,235,0.4)' }}>
                  {collection.count} Properties
                </p>
              </div>
            </Link>
          </TextReveal>
        ))}
      </section>
    </>
  );
}
