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
      <section className="px-6 md:px-[10vw] lg:px-[15vw]" style={{ paddingTop: '22vh', paddingBottom: '6rem' }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="w-full lg:w-2/3">
            <TextReveal>
              <p className="t-label mb-8" style={{ letterSpacing: '0.45em', fontSize: '0.62rem' }}>
                01 ✧ COLLECTIONS
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h1 className="t-display" style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}>
                Properties curated <em>by the way you live.</em>
              </h1>
            </TextReveal>
          </div>
          <div className="w-full lg:w-1/3 pt-4">
            <TextReveal delay={0.15}>
              <p
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'var(--muted)',
                  borderLeft: '1px solid var(--line)',
                  paddingLeft: '2rem'
                }}
              >
                Each collection brings together properties that share a common character — a lifestyle, a landscape, a story.
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Collection Cards */}
      <section className="px-6 md:px-[10vw] lg:px-[15vw] pb-32 flex flex-col gap-12">
        {COLLECTIONS.map((collection, i) => (
          <TextReveal key={collection.slug} delay={0.1 + i * 0.08}>
            <Link
              href={`/collections/${collection.slug}`}
              className="group block relative overflow-hidden"
              style={{ aspectRatio: '21/9', background: 'var(--ink)' }}
              data-project-card
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.21,0.6,0.35,1)] group-hover:scale-[1.05]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-1000"
                  sizes="100vw"
                />
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 z-20 p-8 md:p-16 flex flex-col md:flex-row md:items-end justify-between w-full">
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 300,
                      fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                      color: 'var(--cream)',
                      lineHeight: 1,
                    }}
                  >
                    {collection.title}
                  </h2>
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '1.15rem',
                      color: 'rgba(245,240,235,0.7)',
                    }}
                  >
                    {collection.subtitle}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                  <p className="t-label" style={{ fontSize: '0.65rem', letterSpacing: '0.4em', color: 'rgba(245,240,235,0.5)' }}>
                    0{i + 1} ✧ {collection.count} PROPERTIES
                  </p>
                </div>
              </div>
            </Link>
          </TextReveal>
        ))}
      </section>
    </>
  );
}
